import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FindDataAPI } from "../../API/fetchAPI";
import InputItem from "./inputItem.js";
import useEditDiscount from "../../hooks/discountHooks/useEditDiscount";
import { getAuthToken } from "../../utils";
import { AuthLoadingContext } from "../../context";

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
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
  &: hover {
    color: white;
    background: rgba(201, 186, 152, 1.5);
    transition: all 0.5s ease;
  }
  margin-bottom: 18px;
`;

const DiscountEditPage = () => {
  const { loading, setLoading } = useContext(AuthLoadingContext);
  const { id } = useParams();
  const {
    threshold,
    shipment,
    price,
    desc,

    setThreshold,
    setShipment,
    setPrice,
    setDesc,

    changeDiscount,
    handleChange,
    handleSubmit,
  } = useEditDiscount(id);

  useEffect(() => {
    if (id) {
      setLoading(true);
      FindDataAPI({ authorization: getAuthToken() }, `/findDiscounts/${id}`)
        .then((data) => {
          const { Discount } = data;
          changeDiscount(Discount);
          return setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          return setLoading(false);
        });
    }
  }, []);

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
          <InputItem
            columnName={"運費 price："}
            name={"price"}
            value={price}
            placeholder={"請輸入 price"}
            handleChange={handleChange(setPrice)}
          />
          <Bottom>
            <Submit>提交</Submit>
          </Bottom>
        </form>
      </Wrapper>
    </div>
  );
};

export default DiscountEditPage;
