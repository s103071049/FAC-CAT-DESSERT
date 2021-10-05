import styled from "styled-components"
import { MEDIA_QUERY_SD } from "../../../components/Style/style"

const FormWrapper = styled.div`
  margin:0 auto;
  display:flex;
  flex-direction:column;
  
  & div {
    margin-bottom:20px;
  }
`
const H2 = styled.h2`
  text-align:center;
  margin-bottom:60px;
  color:#444;
`
const FormRow = styled.div`
  display:flex;

  ${MEDIA_QUERY_SD} {
    display:flex;
    flex-direction:column;
    
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

const User = () => {
  return (
    <FormWrapper>
      <H2>個人資訊</H2>
      <FormRow>
        <FormItem>
          <label htmlFor="lastName">
            姓
          </label>
          <input value={"Yang"} id="lastName" readOnly />

        </FormItem>
        <FormItem>
          <label htmlFor="firstName">
            名
          </label>
          <input value={"Ashi"} id="firstName" readOnly />

        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem>
          <label htmlFor="nickName">
            暱稱
          </label>
          <input value={"yangyang"} id="nickName" readOnly />

        </FormItem>
        <FormItem>
          <label htmlFor="phone">
            手機
          </label>
          <input value={"0912345678"} id="phone" readOnly />

        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem>
          <label>
            Email
          </label>
          <input type="email" value={"123@gmail.com"} disabled="disabled" readOnly />

        </FormItem>
      </FormRow>


    </FormWrapper>
  )
}

export default User