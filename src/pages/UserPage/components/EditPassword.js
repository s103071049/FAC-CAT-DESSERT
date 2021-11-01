import styled from "styled-components";

import * as UFS from "./UserLayout/UserFormStyle";

import UserActionBtn from "./UserLayout/UserActionBtn";
import { MEDIA_QUERY_SD } from "../../../components/Style/style";
import useUpdatePassword from "../../../hooks/user/useUpadtePassword";
// import ErrorMessage from "../../../components/common/Errormessage";

const ErrorMessage = styled.p`
  transform: translate(0, -140px);
  color: red;
  font-size: 20px;
  margin: 0;
  text-align: center;
  ${MEDIA_QUERY_SD} {
    transform: translate(0, -170px);
  }
`;

export default function EditPassword() {
  const {
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    newPassword2,
    setNewPassword2,
    errorMessage,
    handleEmpty,
    handleUpdatePassword,
  } = useUpdatePassword();
  return (
    <div>
      <UFS.FormWrapper onSubmit={handleUpdatePassword}>
        <UFS.FormRow>
          <UFS.FormItem>
            <label htmlFor="oldPassword">目前的密碼</label>
            <input
              value={oldPassword}
              id="oldPassword"
              onChange={(e) => setOldPassword(e.target.value)}
              type="password"
            />
          </UFS.FormItem>
        </UFS.FormRow>
        <UFS.WarnningText>*請輸入6個字元以上的英文字母及數字</UFS.WarnningText>
        <UFS.FormRow>
          <UFS.FormItem>
            <label htmlFor="newPassword">新的密碼</label>
            <input
              value={newPassword}
              id="newPassword"
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
            />
          </UFS.FormItem>
        </UFS.FormRow>
        <UFS.FormRow>
          <UFS.FormItem>
            <label htmlFor="newPassword2">新密碼確認</label>
            <input
              value={newPassword2}
              id="newPassword2"
              onChange={(e) => setNewPassword2(e.target.value)}
              type="password"
            />
          </UFS.FormItem>
        </UFS.FormRow>
        <UFS.FormRow>
          <UserActionBtn handleEmpty={handleEmpty} />
        </UFS.FormRow>
      </UFS.FormWrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
