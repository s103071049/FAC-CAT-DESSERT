import React, {useState} from "react"
import styled from "styled-components"
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from '../../components/Style/style'
import cameraIcon from '../../components/img/icon/camera.svg'

const imgLoadingDesc = `從電腦中選取圖檔，
最佳大小為 600px * 600px`

const Wrapper = styled.div`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
  padding: 12px;
`

const Title = styled.h2`
  color: #333;
`
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  & + & {
    margin-top: 24px;
  }
  ${`@media screen and (max-width: 400px)`} {
    flex-direction: column;
  }
`
const Column = styled.div`
  font-size: 20px;
  white-space: nowrap;
  color: #917856;
  font-weight: bold;
  padding: 8px;
`

const Row = styled.input`
  padding: 8px;
  width: 100%;
  height: ${props => props.as === 'textarea' ? '200px' : 'auto'};
  outline: none;
  background: rgb(201, 186, 152, 0.4);
  border: rgb(201, 186, 152, 0.4);
  border-radius: 4px;
  font-size: 18px;
  color: #917856;
  &:: placeholder {
    color: #917856;
    font-weight: bold;
  }
`
const Img = styled.img`
  width: 50%;
  padding: 0 28px;
  background: rgb(201, 186, 152, 0.4);
  ${`@media screen and (max-width: 400px)`} {
    width: 100%;
  }
`

const Button = styled.div`
  background: rgba(201, 186, 152, 2);
  padding: 16px 0;
  text-align: center;
  color: #917856;
  cursor: pointer;
  border-radius: 8px;
  &: hover {
    color: white;
    font-weight: bold;
    transition: all 0.5s ease-out;
  }
`
const Submit = styled.div`
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  color: #917856;
  font-weight: bold;
  padding: 16px;
  background: white;
  border: 1px solid rgba(201, 186, 152, 0.9);
  margin: 0;
  margin-top: 36px;
  &: hover {
    color: white;
    background: rgba(201, 186, 152, 1.5);
    transition: all 0.5s ease;
  }
  margin-bottom: 18px;
`
const Desc = styled.div`
  white-space: wrap;
  line-height: 1.5rem;
  padding: 6px;
  color: #917856;
  font-weight: bold;
  font-size: 20px;
  ${MEDIA_QUERY_SD} {
    font-size: 18px;
  }
`
function Input({name, value, as, placeholder}) {
  const [allValues, setAllValues] = useState({
    '商品名：': '',
    '商品介紹：': '',
    '售價：': '',
    '限量：': ''
  })
  const handleInputChange = (e) => {
    console.log(e.target.name)
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }
  return (
    <Content>
      <Column>{name}</Column>
      <Row name={name} value={allValues[value]} as={as} onChange={handleInputChange} placeholder={placeholder}/>
   </Content>
  )
}

function UploadImg({name, src, desc}) {
  return (
    <>
    <Content>
      <Column>{name}</Column>
    </Content>
    <Content>
      <Img src={src}/>
      <Desc>{desc}</Desc>
    </Content>
    <Button>上傳圖片</Button>
    </>
  )
}
const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`
const AddProductPage = () => {
    return (
      <div>
        <Wrapper>
          <Title>新增商品：</Title>
            <Input name={'商品名：'} value={'商品名：'} placeholder={'請輸入商品名稱'}/>
            <Input name={'商品介紹：'} as={'textarea'} value={'商品介紹：'} placeholder={'請輸入產品介紹'} />
            <Input name={'售價：'} value={'售價：'} placeholder={'請輸入產品售價'} />
            <Input name={'限量：'} value={'限量：'} placeholder={'請輸入產品限定數量'} />
            <UploadImg name={'上傳圖片：'} src={cameraIcon} desc={`${imgLoadingDesc}`}/>
            <Bottom>
              <Submit>編輯完成</Submit>
            </Bottom>
        </Wrapper>
      </div>
    )
  }
  
export default AddProductPage