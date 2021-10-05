import { useState } from "react/cjs/react.development"
import styled from "styled-components"
import { MEDIA_QUERY_SD } from "../../../components/Style/style"

const FormWrapper = styled.div`
  margin:0 auto;
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
  &:last-child {
    margin-top:50px;
  }

  ${MEDIA_QUERY_SD} {
    &:last-child {
      text-align:center;
    }
  }
`
const FormItem = styled.div`
  padding: 0 20px;
  
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
const WarnningText = styled.p`
  padding: 0 20px;
  color:#E55555;
  margin-bottom:50px;
`
const Button = styled.button`
  color : #ABB4BB;
  border:1px solid #ABB4BB;
  background:#fff;
  border-radius:6px;
  padding:6px 60px;
  cursor:pointer;
  transition:all 0.1s;

  & + & {
    margin-left:30px;
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
      margin-top:30px;
    }
  }

`

const EditPassword = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPassword2, setNewPassword2] = useState('')

  return (
    <FormWrapper>
      <FormRow>
        <FormItem>
          <label htmlFor="oldPassword">
            目前的密碼
          </label>
          <input value={oldPassword} id="oldPassword" onChange={(e) => setOldPassword(e.target.value)} type="password" />

        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem>
          <label htmlFor="newPassword">
            新的密碼
          </label>
          <input value={newPassword} id="newPassword" onChange={(e) => setNewPassword(e.target.value)} type="password" />
        </FormItem>
        <WarnningText>*請輸入6個字元以上的英文字母及數字，不可使用特殊符號</WarnningText>
      </FormRow>
      <FormRow>
        <FormItem>
          <label htmlFor="newPassword2">
            新密碼確認
          </label>
          <input value={newPassword2} id="newPassword2" onChange={(e) => setNewPassword2(e.target.value)} type="password" />
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

export default EditPassword