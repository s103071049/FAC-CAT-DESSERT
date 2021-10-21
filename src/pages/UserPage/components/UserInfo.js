import React, { useContext, useState } from "react";
import * as UFS from "./UserLayout/UserFormStyle";
import UserActionBtn from "./UserLayout/UserActionBtn";
import { AuthContexts } from "../../../context";
import { updateUser } from "../../../WEBAPI";
import EachErrorMessage from "../../../components/common/EachErrorMessage";

export default function UserInfo({ setLoading }) {
  const { user, setUser } = useContext(AuthContexts);
  const [lastname, setLastname] = useState(user.lastname);
  const [firstname, setFirstname] = useState(user.firstname);
  const [username, setUsername] = useState(user.username);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [error, setError] = useState(Array(5).fill(null));
  const handleEmpty = (e) => {
    e.preventDefault();
    setLastname(user.lastname);
    setFirstname(user.firstname);
    setUsername(user.username);
    setPhone(user.phone);
    setAddress(user.address);
  };
  // 更新user
  const handleUpdateUser = (e) => {
    e.preventDefault();
    setLoading(true);
    //資料不齊全
    if (!username || !phone || !lastname || !firstname || !address) {
      const newError = JSON.parse(JSON.stringify(error));
      if (!lastname) {
        newError[0] = "*請填寫";
      } else {
        newError[0] = null;
      }
      if (!firstname) {
        newError[1] = "*請填寫";
      } else {
        newError[1] = null;
      }
      if (!username) {
        newError[2] = "*請填寫";
      } else {
        newError[2] = null;
      }
      if (!phone) {
        newError[3] = "*請填寫";
      } else {
        newError[3] = null;
      }
      if (!address) {
        newError[4] = "*請填寫";
      } else {
        newError[4] = null;
      }
      setError(newError);
      return setLoading(false);
    }
    //串api
    updateUser(username, firstname, lastname, phone, address).then(
      (response) => {
        if (!response.success) {
          console.log(response.message);
          return setLoading(false);
        }
        setError(Array(5).fill(null));
        alert("資料更改完成");
      }
    );
    setLoading(false);
  };
  return (
    <UFS.FormWrapper onSubmit={handleUpdateUser}>
      <UFS.FormRow>
        <UFS.FormItem>
          <label htmlFor="lastName">
            姓{error[0] && <EachErrorMessage>{error[0]}</EachErrorMessage>}
          </label>
          <input
            value={lastname}
            id="lastName"
            onChange={(e) => setLastname(e.target.value)}
          />
        </UFS.FormItem>
        <UFS.FormItem>
          <label htmlFor="firstName">
            名{error[1] && <EachErrorMessage>{error[1]}</EachErrorMessage>}
          </label>
          <input
            value={firstname}
            id="firstName"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UFS.FormItem>
          <label htmlFor="nickName">
            暱稱
            {error[2] && <EachErrorMessage>{error[2]}</EachErrorMessage>}
          </label>
          <input
            value={username}
            id="nickName"
            onChange={(e) => setUsername(e.target.value)}
          />
        </UFS.FormItem>
        <UFS.FormItem>
          <label htmlFor="phone">
            手機
            {error[3] && <EachErrorMessage>{error[3]}</EachErrorMessage>}
          </label>
          <input
            value={phone}
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UFS.FormItem>
          <label>
            地址
            {error[4] && <EachErrorMessage>{error[4]}</EachErrorMessage>}
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UFS.FormItem>
          <label>Email</label>
          <input type="email" value={user.email} disabled="disabled" />
        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UserActionBtn handleEmpty={handleEmpty} />
      </UFS.FormRow>
    </UFS.FormWrapper>
  );
}
