import { Link } from "react-router-dom";
import styled from "styled-components";
import InputItem from "./inputItem.js";
import useEditDiscount from "../../hooks/discountHooks/useEditDiscount";

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const TitleButton = styled(Link)`
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  color: #917856;
  font-weight: bold;
  padding: 16px;
  background: white;
  border: 1px solid rgba(201, 186, 152, 0.9);
  margin: 0;
  margin-top: 36px;
  margin-right: 15px;
  padding-top: 19px;
  &:hover {
    color: white;
    background: rgba(201, 186, 152, 1.5);
    transition: all 0.5s ease;
  }
  margin-bottom: 18px;
`;
const Wrapper = styled.div`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
  padding: 12px;
`;

const Title = styled.h2`
  color: #333;
`;

const Submit = styled.button`
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  color: #917856;
  font-weight: bold;
  padding: 16px;
  background: white;
  border: 1px solid rgba(201, 186, 152, 0.9);
  margin: 0;
  margin-top: 36px;
  &:hover {
    color: white;
    background: rgba(201, 186, 152, 1.5);
    transition: all 0.5s ease;
  }
  margin-bottom: 18px;
`;

const DiscountEditPage = () => {
  const {
    threshold,
    shipment,
    desc,
    setThreshold,
    setShipment,
    setDesc,
    handleChange,
    handleSubmit,
  } = useEditDiscount();

  return (
    <div>
      <Wrapper>
        <Title>編輯運費規則</Title>
        <form onSubmit={handleSubmit}>
          <InputItem
            columnName={"運費門檻："}
            name={"threshold"}
            value={threshold}
            placeholder={"請輸入運費門檻"}
            handleChange={handleChange(setThreshold)}
          />
          <InputItem
            columnName={"運費說明："}
            name={"desc"}
            as={"textarea"}
            value={desc}
            placeholder={"請輸入運費說明"}
            handleChange={handleChange(setDesc)}
          />
          <InputItem
            columnName={"運費："}
            name={"shipment"}
            value={shipment}
            placeholder={"請輸入運費"}
            handleChange={handleChange(setShipment)}
          />
          <Bottom>
            <TitleButton to="/admin/discounts">返回</TitleButton>
            <Submit>提交</Submit>
          </Bottom>
        </form>
      </Wrapper>
    </div>
  );
};

export default DiscountEditPage;
