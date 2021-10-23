import React, { useContext, useState } from "react";
import styled from "styled-components";

import * as UFS from "./UserLayout/UserFormStyle";

import UserActionBtn from "./UserLayout/UserActionBtn";
import { AuthContexts } from "../../../context";
import { updatePassword } from "../../../WEBAPI";
import { MEDIA_QUERY_SD } from "../../../components/Style/style";
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

export default function EditPassword({ setLoading }) {
  const { user, setUser } = useContext(AuthContexts);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const passwordRe = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  // 清空
  const handleEmpty = (e) => {
    e.preventDefault();
    setOldPassword("");
    setNewPassword("");
    setNewPassword2("");
  };
  //更新密碼
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    setLoading(true);
    //資料不齊全
    if (!oldPassword || !newPassword || !newPassword2) {
      setErrorMessage("資料不齊全");
      return setLoading(false);
    }
    if (newPassword !== newPassword2) {
      setErrorMessage("密碼不相同");
      return setLoading(false);
    }
    if (!passwordRe.test(newPassword)) {
      setErrorMessage("密碼強度不足");
      return setLoading(false);
    }
    updatePassword(oldPassword, newPassword, newPassword2).then((response) => {
      if (!response.success) {
        setErrorMessage(response.message);
        return setLoading(false);
      }
      setErrorMessage("");
      alert("密碼更改完成");
    });
    setLoading(false);
  };
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
