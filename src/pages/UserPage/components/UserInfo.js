import styled from "styled-components"
const FormWrapper = styled.div`
  margin:0 auto;
  & div {
    display:flex;
    margin-bottom:20px;
  }
`
const FormItem = styled.div`
  
  & + & {
    margin-left:30px;
  }
  
`

const UserAction = () => {
  return (
    <FormWrapper>
      <div>
        <FormItem>
          <label htmlFor="lastName">
            姓<br />
            <input value={"Yang"} id="lastName" />
          </label>
        </FormItem>
        <FormItem>
          <label htmlFor="firstName">
            名 <br />
            <input value={"Ashi"} id="firstName" />
          </label>
        </FormItem>
      </div>
      <div>
        <FormItem>
          <label htmlFor="nickName">
            暱稱 <br />
            <input value={"Yang"} id="nickName" />
          </label>
        </FormItem>
        <FormItem>
          <label htmlFor="phone">
            手機 <br />
            <input value={"Yang"} id="phone" />
          </label>
        </FormItem>
      </div>
      <div>
        <label htmlFor="email">
          Email <br />
          <input type="email" value={"123@gmail.com"} id="email" disabled="disabled" />
        </label>
      </div>
      <div>
        <button>重新填寫</button>
        <button type="submit">確定修改</button>
      </div>


    </FormWrapper>
  )
}

export default UserAction