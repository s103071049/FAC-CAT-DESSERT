import styled from "styled-components";

const ErrorMessageP = styled.p`
  text-align: center;
  margin: 15px 0 0 0;
  color: red;
`;

export default function ErrorMessage({ children }) {
  return <ErrorMessageP>{children}</ErrorMessageP>;
}
