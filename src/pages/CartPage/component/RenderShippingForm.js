import { useCallback, useContext } from "react";
import styled from "styled-components";
import cash from "../../../components/img/icon/cash.svg";
import card from "../../../components/img/icon/card.svg";
import PayWarnningContent from "./PayWarnningContent";
import { AuthContexts } from "../../../context";
import errorMessenger from "../../../hooks/carts/shipping/errorMessenger";
import useShipping from "../../../hooks/carts/useShipping";
import userShippingApi from "../../../hooks/carts/useShippingApi";
const Form = styled.form`
  margin-top: 20px;
`;
const FormItemWrapper = styled.div`
  margin-top: 20px;
  padding-bottom: 22px;
  border-bottom: 2px solid #d7dadc;
  ${(props) =>
    props.$isInlineFormItem &&
    `
    padding: 20px;
    background: #F0F1F3;
    border-bottom:0;
  `}
`;

const SubTitle = styled.div`
  margin-top: 16px;
  color: #818b92;
`;
const FormContent = styled.div`
  margin-top: 12px;
`;
const FormRadioLabel = styled.label`
  display: inline-block;
  border: 1px solid #9ca4aa;
  padding: 6px 12px;
  color: #000;
  & + & {
    margin-left: 20px;
  }
  @media screen and (max-width: 698px) {
    & + & {
      margin-top: 20px;
      margin-left: 0px;
    }
    min-width: 100%;
  }
`;
const Span = styled.span`
  margin-left: 12px;
  & + & {
    margin-left: 20px;
  }
  & img {
    width: 25px;
    height: 25px;
    vertical-align: bottom;
  }
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid #d7dadc;
  margin: 0;
  padding: 6px 12px;
`;
const FormNote = styled.div`
  background: #c4c4c4;
  font-size: 16px;
  padding: 6px 12px;
  color: #115460;
`;
const AdviceText = styled.p`
  color: #115460;
  font-size: 16px;
`;
const FormInputLabel = styled.label`
  margin: 10px 0;
  display: block;
  color: #818b92;
`;
const ForCheckboxItem = styled.div`
  @media screen and (max-width: 698px) {
    margin-top: 12px;
  }
`;
const InlineInput = styled.input`
  border: none;
  margin-left: 16px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  font-style: italic;
  padding: 0 6px;
`;

const FormBtn = styled.button`
  margin-top: 20px;
  border: none;
  background: #f9897a;
  width: 100%;
  font-size: 18px;
  color: #fff;
  padding: 12px 0;
`;

const RenderShippingForm = ({ data }) => {
  const { user } = useContext(AuthContexts);
  const {
    handlePayment,
    handleNameChange,
    handlePhoneChange,
    handleAddress,
    handleDate,
    handleTransactionNumber,
    handleDonateInvoice,
    handleInvoice,
    handleCompanyInvoice,
    handleConsignee,
    handleReceiverName,
    handleReceiverPhone,
    handleReceiverAddress,
    handleCheckOne,
    handleCheckTwo,
    formState,
    errorState,
    dispatchErr,
  } = useShipping();
  const { orderDone } = userShippingApi();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let prods = data;
      let order = {
        userId: user.id,
        buyerName: formState.name,
        buyerPhone: formState.phone,
        buyerAddress: formState.address,
        deliverDate: formState.dbDate,
        receiverName: formState.receiverName,
        receiverPhone: formState.receiverPhone,
        receiverAddress: formState.receiverAddress,
        lastFiveNumber: formState.transactionNumber,
        donateInvoice: formState.dbIsDonateInvoice,
        invoiceType: formState.invoice,
        invoiceNumber: formState.companyInvoice,
      };
      let products = prods.map((prod) => {
        return {
          id: prod["Product.id"],
          number: prod.product_quantity,
        };
      });
      console.log("order", order);
      errorMessenger(formState, errorState, dispatchErr);
      // 通過錯誤處理後，呼叫 api，寫入訂單及清除購物車資料!
      if (
        errorState.errorReceiverAddress ||
        errorState.errorReceiverPhone ||
        errorState.errorReceiverName ||
        errorState.errorAddress ||
        errorState.errorPhone ||
        errorState.errorName ||
        errorState.errorLastFiveNumber ||
        errorState.errorDate
      ) {
        return;
      }
      if (errorState.errorLaw) {
        alert("為保障雙方權益，送出訂單前請同意下列條款");
        return;
      }
      orderDone(products, order);
    },
    [data, dispatchErr, errorState, formState, user.id, orderDone]
  );
  return (
    <Form>
      <FormItemWrapper>
        <SubTitle>合作物流</SubTitle>
        <FormContent>
          <FormRadioLabel>
            <Span>黑貓宅配</Span>
          </FormRadioLabel>
        </FormContent>
      </FormItemWrapper>
      <FormItemWrapper>
        <SubTitle>付款方式</SubTitle>
        <FormContent>
          <FormRadioLabel>
            <input
              type="radio"
              name="payMethod"
              value="card"
              checked={formState.payment === "card"}
              onChange={(e) => handlePayment(e)}
            />
            <Span>
              <img src={card} alt="credit card" />
            </Span>
            <Span>信用卡</Span>
          </FormRadioLabel>
          <FormRadioLabel>
            <input
              type="radio"
              name="payMethod"
              value="ATM"
              checked={formState.payment === "ATM"}
              onChange={(e) => handlePayment(e)}
            />
            <Span>
              <img src={cash} alt="cash" />
            </Span>
            <Span>ATM</Span>
          </FormRadioLabel>
        </FormContent>
        <SubTitle>結帳須知</SubTitle>
        <FormContent>
          <FormNote>
            <PayWarnningContent />
          </FormNote>
        </FormContent>
      </FormItemWrapper>
      <FormItemWrapper>
        <SubTitle>購買人資訊</SubTitle>
        <FormContent>
          <FormInputLabel htmlFor="fullname">
            姓名<span style={{ color: "red" }}>{errorState.errorName}</span>
          </FormInputLabel>
          <Input
            type="text"
            id="fullname"
            name="name"
            placeholder="請輸入姓名"
            value={formState.name}
            onChange={(e) => handleNameChange(e)}
          />
        </FormContent>
        <FormContent>
          <FormInputLabel htmlFor="phone">
            手機<span style={{ color: "red" }}> {errorState.errorPhone}</span>
          </FormInputLabel>
          <Input
            type="number"
            id="phone"
            placeholder="請輸入手機號碼"
            value={formState.phone}
            onChange={(e) => handlePhoneChange(e)}
          />
          <AdviceText>
            *取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321
          </AdviceText>
        </FormContent>
        <FormContent>
          <FormInputLabel htmlFor="address">
            配送地址
            <span style={{ color: "red" }}>{errorState.errorAddress}</span>
          </FormInputLabel>
          <Input
            type="text"
            id="address"
            placeholder="請填寫配送地址"
            value={formState.address}
            onChange={(e) => handleAddress(e)}
          />
        </FormContent>
        <FormContent>
          <FormInputLabel htmlFor="shippingDate">
            配送日期<span style={{ color: "red" }}>{errorState.errorDate}</span>
          </FormInputLabel>
          <Input
            type="date"
            id="shippingDate"
            value={formState.date}
            onChange={(e) => handleDate(e)}
          />
        </FormContent>
        <FormContent>
          <FormInputLabel htmlFor="last5Number">
            帳號/信用卡 後五碼
            <span style={{ color: "red" }}>
              {errorState.errorLastFiveNumber}
            </span>
          </FormInputLabel>
          <Input
            type="number"
            id="last5Number"
            placeholder="請輸入信用卡或轉帳帳號的後五碼"
            value={formState.transactionNumber}
            onChange={(e) => handleTransactionNumber(e)}
          />
        </FormContent>
      </FormItemWrapper>
      <FormItemWrapper>
        <SubTitle>隨貨附發票?</SubTitle>
        <FormContent>
          <FormRadioLabel>
            <input
              type="radio"
              name="invoice"
              value="withPackage"
              checked={formState.isDonateInvoice === "withPackage"}
              onChange={(e) => {
                handleDonateInvoice(e);
              }}
            />
            <Span>是</Span>
          </FormRadioLabel>
          <FormRadioLabel>
            <input
              type="radio"
              name="invoice"
              value="donate"
              checked={formState.isDonateInvoice === "donate"}
              onChange={(e) => {
                handleDonateInvoice(e);
              }}
            />
            <Span>捐贈</Span>
          </FormRadioLabel>
        </FormContent>
        <SubTitle>
          發票類型
          <span style={{ color: "red" }}>{errorState.errorInvoice}</span>
        </SubTitle>
        <FormContent>
          <FormRadioLabel>
            <input
              type="radio"
              name="inVoiceType"
              value="normal"
              checked={formState.invoice === "normal"}
              onChange={(e) => handleInvoice(e)}
            />
            <Span>二聯式</Span>
          </FormRadioLabel>
          <FormRadioLabel>
            <input
              type="radio"
              name="inVoiceType"
              value="withCompanyNum"
              checked={formState.invoice === "withCompanyNum"}
              onChange={(e) => handleInvoice(e)}
            />
            <Span>開立統編</Span>
            {formState.invoice === "withCompanyNum" && (
              <InlineInput
                type="text"
                name="companuNum"
                placeholder="請輸入統編"
                value={formState.companyInvoice}
                onChange={(e) => handleCompanyInvoice(e)}
              />
            )}
          </FormRadioLabel>
          <SubTitle>發票須知</SubTitle>
          <FormContent>
            <FormNote>
              <h3>依統一發票使用辦法規定</h3>
              <p>
                依統一發票使用辦法規定：個人(二聯式)發票一經開立，無法更改或改開公司戶(三聯式)發票。請務必確認選用之電子發票載具代碼是否正確，一經開立不得要求更改。
              </p>
            </FormNote>
          </FormContent>
        </FormContent>
      </FormItemWrapper>
      <FormItemWrapper>
        <SubTitle>收件人資訊</SubTitle>
        <FormContent>
          <FormRadioLabel>
            <input
              type="radio"
              name="consignee"
              value={formState.isSameConsignee}
              checked={formState.isSameConsignee}
              onChange={(e) => handleConsignee(e)}
            />
            <Span>同購買人</Span>
          </FormRadioLabel>
          <FormRadioLabel>
            <input
              type="radio"
              name="consignee"
              value={!formState.isSameConsignee}
              checked={!formState.isSameConsignee}
              onChange={(e) => handleConsignee(e)}
            />
            <Span>收件與購買不同人</Span>
          </FormRadioLabel>
          {!formState.isSameConsignee && (
            <FormItemWrapper $isInlineFormItem={true}>
              <FormContent>
                <FormInputLabel htmlFor="consignee">
                  收件人姓名
                  <span style={{ color: "red" }}>
                    {errorState.errorReceiverName}
                  </span>
                </FormInputLabel>
                <Input
                  type="text"
                  id="consignee"
                  value={formState.receiverName}
                  onChange={(e) => handleReceiverName(e)}
                />
              </FormContent>
              <FormContent>
                <FormInputLabel htmlFor="consigneePhone">
                  手機
                  <span style={{ color: "red" }}>
                    {errorState.errorReceiverPhone}
                  </span>
                </FormInputLabel>
                <Input
                  type="number"
                  id="consigneePhone"
                  value={formState.receiverPhone}
                  onChange={(e) => handleReceiverPhone(e)}
                />
                <AdviceText>
                  *取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321
                </AdviceText>
              </FormContent>
              <FormContent>
                <FormInputLabel htmlFor="consigneeAddress">
                  配送地址
                  <span style={{ color: "red" }}>
                    {errorState.errorReceiverAddress}
                  </span>
                </FormInputLabel>
                <Input
                  type="text"
                  id="consigneeAddress"
                  value={formState.receiverAddress}
                  onChange={(e) => handleReceiverAddress(e)}
                />
              </FormContent>
            </FormItemWrapper>
          )}
          <SubTitle>收件人資訊預覽</SubTitle>
          <FormContent>
            <FormNote>
              <div>
                收件人:
                {formState.isSameConsignee && <span>{formState.name}</span>}
                {!formState.isSameConsignee && (
                  <span>{formState.receiverName}</span>
                )}
              </div>
              <div>
                聯絡電話:
                {formState.isSameConsignee && <span>{formState.phone}</span>}
                {!formState.isSameConsignee && (
                  <span>{formState.receiverPhone}</span>
                )}
              </div>
              <div>
                收件地址:
                {formState.isSameConsignee && <span>{formState.address}</span>}
                {!formState.isSameConsignee && (
                  <span>{formState.receiverAddress}</span>
                )}
              </div>
            </FormNote>
          </FormContent>
        </FormContent>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormContent>
          <ForCheckboxItem>
            <input
              type="checkbox"
              name="dataPolicy"
              value={formState.checkOne}
              onChange={(e) => handleCheckOne(e)}
            />
            <Span>同意會員責任規範及個資聲明與商家會員條款</Span>
          </ForCheckboxItem>
          <ForCheckboxItem>
            <input
              type="checkbox"
              name="orderPolicy"
              value={formState.checkTwo}
              onChange={(e) => handleCheckTwo(e)}
            />
            <Span>
              為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利
            </Span>
          </ForCheckboxItem>
          <span style={{ color: "red" }}>{errorState.errorLaw}</span>
        </FormContent>
      </FormItemWrapper>
      <FormBtn type="submit" onClick={handleSubmit}>
        立即結帳
      </FormBtn>
    </Form>
  );
};
export default RenderShippingForm;
