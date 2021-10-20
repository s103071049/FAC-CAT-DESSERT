import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from "../../components/Style/style";
import { APIFunction } from "../../API/fetchAPI";

const Wrapper = styled.div`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
  padding: 12px;
`;

const Title = styled.h2`
  color: #333;
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  & + & {
    margin-top: 24px;
  }
  ${`@media screen and (max-width: 400px)`} {
    flex-direction: column;
  }
`;
const Column = styled.div`
  font-size: 20px;
  color: #917856;
  font-weight: bold;
  padding: 8px;
  white-space: nowrap;
`;

const Row = styled.input`
  padding: 8px;
  width: 100%;
  height: ${(props) => (props.as === "textarea" ? "200px" : "auto")};
  outline: none;
  background: rgb(201, 186, 152, 0.4);
  border: rgb(201, 186, 152, 0.4);
  border-radius: 4px;
  font-size: 20px;
  color: #917856;
  &::placeholder {
    color: #917856;
    font-weight: bold;
  }
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

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Input({ columnName, name, as, placeholder, handleInputChange }) {
  return (
    <Content>
      <Column>{columnName}</Column>
      <Row
        name={name}
        as={as}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </Content>
  );
}

const AddDiscountPage = () => {
  const [allValues, setAllValues] = useState({});
  const handleInputChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };
  const handleSummit = async (event) => {
    event.preventDefault();
    const res = await APIFunction(
      { data: allValues, authorization: localStorage.getItem("token") },
      "/createDiscounts"
    );
    if (res.success) {
      alert("成功");
    } else {
      alert(res.message);
    }
  };

  return (
    <div>
      <Wrapper>
        <Title>新增運費規則</Title>
        <form onSubmit={handleSummit}>
          <Input
            columnName={"運費門檻："}
            name={"threshold"}
            // value={allValues.threshold}
            placeholder={"請輸入運費門檻"}
            handleInputChange={handleInputChange}
          />
          <Input
            columnName={"運費說明："}
            name={"desc"}
            as={"textarea"}
            // value={allValues.desc}
            placeholder={"請輸入運費說明"}
            handleInputChange={handleInputChange}
          />
          <Input
            columnName={"運費："}
            name={"shipment"}
            // value={allValues.shipment}
            placeholder={"請輸入運費"}
            handleInputChange={handleInputChange}
          />
          <Input
            columnName={"運費 price："}
            name={"price"}
            // value={allValues.price}
            placeholder={"請輸入 price"}
            handleInputChange={handleInputChange}
          />
          <Bottom>
            <Submit>提交</Submit>
          </Bottom>
        </form>
      </Wrapper>
    </div>
  );
};

export default AddDiscountPage;
