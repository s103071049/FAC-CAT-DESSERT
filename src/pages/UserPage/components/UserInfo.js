import { useState } from "react/cjs/react.development"
import * as UFS from './UserLayout/UserFormStyle'
import UserActionBtn from "./UserLayout/UserActionBtn"

const UserInfo = () => {
  const [lastName, setLastName] = useState('Yang')
  const [firstName, setFirstName] = useState('Ashi')
  const [nickName, setNickName] = useState('yangyang')
  const [phone, setPhone] = useState('0912345678')
  const [address, setAddress] = useState("高雄市岡山區貓貓路三段84巷33號")
  return (
    <UFS.FormWrapper>
      <UFS.FormRow>
        <UFS.FormItem>
          <label htmlFor="lastName">
            姓
          </label>
          <input placeholder={lastName} id="lastName" onChange={(e) => setLastName(e.target.value)} />

        </UFS.FormItem>
        <UFS.FormItem>
          <label htmlFor="firstName">
            名
          </label>
          <input placeholder={firstName} id="firstName" onChange={e => setFirstName(e.target.value)} />

        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UFS.FormItem>
          <label htmlFor="nickName">
            暱稱
          </label>
          <input placeholder={nickName} id="nickName" onChange={e => setNickName(e.target.value)} />

        </UFS.FormItem>
        <UFS.FormItem>
          <label htmlFor="phone">
            手機
          </label>
          <input placeholder={phone} id="phone" onChange={e => setPhone(e.target.value)} />

        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UFS.FormItem>
          <label>
            地址
          </label>
          <input type="text" placeholder={address} onChange={e => setAddress(e.target.value)} />
        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UFS.FormItem>
          <label>
            Email
          </label>
          <input type="email" value={"123@gmail.com"} disabled="disabled" />

        </UFS.FormItem>
      </UFS.FormRow>
      <UFS.FormRow>
        <UserActionBtn />
      </UFS.FormRow>
    </UFS.FormWrapper>
  )
}

export default UserInfo