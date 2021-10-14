import { useState } from "react/cjs/react.development";
import * as UFS from "./UserLayout/UserFormStyle";

import UserActionBtn from "./UserLayout/UserActionBtn";

export const EditPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  return (
    <UFS.FormWrapper>
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
      <UFS.WarnningText>
        *請輸入6個字元以上的英文字母及數字，不可使用特殊符號
      </UFS.WarnningText>
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
        <UserActionBtn />
      </UFS.FormRow>
    </UFS.FormWrapper>
  );
};
