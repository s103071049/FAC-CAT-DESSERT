import styled from "styled-components"
import { MEDIA_QUERY_SD } from "../../../../components/Style/style"

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
export default function UserActionBtn() {
  return (
    <FormItem>
      <Button>重新填寫</Button>
      <Button type="submit">確定修改</Button>
    </FormItem>
  )
}