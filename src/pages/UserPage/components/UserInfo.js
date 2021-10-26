import React, { useContext, useReducer, useState } from "react";
import * as UFS from "./UserLayout/UserFormStyle";
import UserActionBtn from "./UserLayout/UserActionBtn";
import EachErrorMessage from "../../../components/common/EachErrorMessage";
import useUpdateUserInfo from "../../../hooks/user/useUpdateUserInfo";

export default function UserInfo() {
  const {
    user,
    setUser,
    loading,
    setLoading,
    lastname,
    firstname,
    username,
    phone,
    address,
    error,
    handleEmpty,
    handleChange,
    handleUpdateUser,
  } = useUpdateUserInfo();
  return (
    <UFS.FormWrapper onSubmit={handleUpdateUser}>
      <UFS.FormRow>
        <UFS.FormItem>
          <label htmlFor="lastname">
            姓
            {error.lastname && (
              <EachErrorMessage>{error.lastname}</EachErrorMessage>
            )}
          </label>
          <input value={lastname} id="lastname" onChange={handleChange} />
        </UFS.FormItem>
        <UFS.FormItem>
          <label htmlFor="firstname">
            名
            {error.firstname && (
              <EachErrorMessage>{error.firstname}</EachErrorMessage>
            )}
          </label>
          <input value={firstname} id="firstname" onChange={handleChange} />
        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UFS.FormItem>
          <label htmlFor="username">
            暱稱
            {error.username && (
              <EachErrorMessage>{error.username}</EachErrorMessage>
            )}
          </label>
          <input value={username} id="username" onChange={handleChange} />
        </UFS.FormItem>
        <UFS.FormItem>
          <label htmlFor="phone">
            手機
            {error.phone && <EachErrorMessage>{error.phone}</EachErrorMessage>}
          </label>
          <input value={phone} id="phone" onChange={handleChange} />
        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UFS.FormItem>
          <label htmlFor="address">
            地址
            {error.address && (
              <EachErrorMessage>{error.address}</EachErrorMessage>
            )}
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={handleChange}
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
