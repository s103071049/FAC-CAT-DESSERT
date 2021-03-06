import styled from "styled-components";

const ErrorMessageSpan = styled.span`
  padding-left: 15px;
  color: red;
`;

export default function ErrorMessage({ children }) {
  return <ErrorMessageSpan>{children}</ErrorMessageSpan>;
}
