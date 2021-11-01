import { useContext, useState } from "react";

import { AuthLoadingContext } from "../../context";
import { updatePassword } from "../../WEBAPI";
export default function useUpdatePassword() {
  const { setLoading } = useContext(AuthLoadingContext);
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
  return {
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    newPassword2,
    setNewPassword2,
    errorMessage,
    handleEmpty,
    handleUpdatePassword,
  };
}
