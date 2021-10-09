import { useState } from "react/cjs/react.development"
import styled from "styled-components"
import { MEDIA_QUERY_SD } from "../../../components/Style/style"

const FormWrapper = styled.div`
  margin:0 auto;
  display:flex;
  flex-direction:column;
  padding-top:80px;
  padding-left:20px;
  & div {
    margin-bottom:20px;
  }

  ${MEDIA_QUERY_SD} {
    padding-top:0;
    padding-left:0;

  }
 
`
const FormRow = styled.div`
  display:flex;
  &:last-child {
    margin-top:50px;
  }

  ${MEDIA_QUERY_SD} {
    display:flex;
    flex-direction:column;
    &:last-child {
      text-align:center;
      margin-top:20px;

    }
  }
`
const FormItem = styled.div`
  padding: 0 20px;
  flex-grow:1;
  & label {
    color:#212529;
    font-size:16px;
    display:block;
  }

  & input {
    margin-top:10px;
    width:100%;
    border:1px solid #CED4DA;
    padding:10px 20px;
    border-radius:6px;
  }
`
const Button = styled.button`
  color : #ABB4BB;
  border:1px solid #ABB4BB;
  background:#fff;
  border-radius:6px;
  padding:6px 36px;
  cursor:pointer;
  transition:all 0.1s;

  & + & {
    margin-left:8px;
  }
 
  &[type="submit"] {
    color:#D49E6A;
    border:1px solid #D49E6A;
  }

  &:hover {
    background:#D49E6A;
    color:white;
  }

   ${MEDIA_QUERY_SD} {
    & + & {
      margin:0;
      margin-top:20px;
    }
  }

`

const UserInfo = () => {
  const [lastName, setLastName] = useState('Yang')
  const [firstName, setFirstName] = useState('Ashi')
  const [nickName, setNickName] = useState('yangyang')
  const [phone, setPhone] = useState('0912345678')
  return (
    <FormWrapper>
      <FormRow>
        <FormItem>
          <label htmlFor="lastName">
            姓
          </label>
          <input value={lastName} id="lastName" onChange={(e) => setLastName(e.target.value)} />

        </FormItem>
        <FormItem>
          <label htmlFor="firstName">
            名
          </label>
          <input value={firstName} id="firstName" onChange={(e) => setFirstName(e.target.value)} />

        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem>
          <label htmlFor="nickName">
            暱稱
          </label>
          <input value={nickName} id="nickName" onChange={(e) => setNickName(e.target.value)} />

        </FormItem>
        <FormItem>
          <label htmlFor="phone">
            手機
          </label>
          <input value={phone} id="phone" onChange={(e) => setPhone(e.target.value)} />

        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem>
          <label>
            Email
          </label>
          <input type="email" value={"123@gmail.com"} disabled="disabled" />

        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem>
          <Button>重新填寫</Button>
          <Button type="submit">確定修改</Button>
        </FormItem>
      </FormRow>
    </FormWrapper>
  )
}

export default UserInfo