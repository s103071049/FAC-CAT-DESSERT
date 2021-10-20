import styled from "styled-components";
import { MEDIA_QUERY_SD } from "../../../../components/Style/style";

export const FormWrapper = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-left: 20px;
  & div {
    margin-bottom: 20px;
  }

  ${MEDIA_QUERY_SD} {
    padding-top: 0;
    padding-left: 0;
  }
`;
export const FormRow = styled.div`
  display: flex;
  &:last-child {
    margin-top: 50px;
  }

  ${MEDIA_QUERY_SD} {
    display: flex;
    flex-direction: column;
    &:last-child {
      text-align: center;
      margin-top: 20px;
    }
  }
`;
export const FormItem = styled.div`
  padding: 0 20px;
  flex-grow: 1;
  & label {
    color: #212529;
    font-size: 16px;
    display: block;
  }

  & input {
    margin-top: 10px;
    width: 100%;
    border: 1px solid #ced4da;
    padding: 10px 20px;
    border-radius: 6px;
  }
`;
export const WarnningText = styled.p`
  color: #e55555;
  padding: 0 20px;

  ${MEDIA_QUERY_SD} {
    margin-bottom: 40px;
  }
`;
