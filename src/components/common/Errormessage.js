import styled from "styled-components";

const ErrorMessageP = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 15px 0 0 0;
  color: red;
`;

export default function ErrorMessage({ children }) {
  return <ErrorMessageP>{children}</ErrorMessageP>;
}
