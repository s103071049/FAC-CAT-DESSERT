import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from "../../components/Style/style";

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

const Submit = styled.div`
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

function Input({ name, value, as, placeholder }) {
  const [allValues, setAllValues] = useState({
    "運費門檻：": "",
    "運費說明：": "",
  });
  const handleInputChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };
  return (
    <Content>
      <Column>{name}</Column>
      <Row
        name={name}
        value={allValues[value]}
        as={as}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </Content>
  );
}

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const AddDiscountPage = () => {
  return (
    <div>
      <Wrapper>
        <Title>新增運費規則</Title>
        <Input
          name={"運費門檻："}
          value={"運費門檻："}
          placeholder={"請輸入運費門檻"}
        />
        <Input
          name={"運費說明："}
          as={"textarea"}
          value={"運費說明："}
          placeholder={"請輸入運費說明"}
        />
        <Bottom>
          <Submit>提交</Submit>
        </Bottom>
      </Wrapper>
    </div>
  );
};

export default AddDiscountPage;
