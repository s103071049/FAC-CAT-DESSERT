import styled from "styled-components";

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
  &:: placeholder {
    color: #917856;
    font-weight: bold;
  }
`;

function InputItem({ columnName, name, as, value, placeholder, handleChange }) {
  return (
    <Content>
      <Column>{columnName}</Column>
      <Row
        name={name}
        as={as}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Content>
  );
}

export default InputItem;
