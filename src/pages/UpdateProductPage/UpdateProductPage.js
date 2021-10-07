import React from "react"
import styled from "styled-components"
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from '../../components/Style/style'
import cameraIcon from '../../components/img/icon/camera.svg'

const desc = `2020新品，日本柚子帶出輕盈微酸的口感。

臺灣鐵觀音帶出濃郁茶香

－
日本100%柚子汁

柚子輕盈甘納許

臺灣鐵觀音甘納許

**甘納許為巧克力加上鮮奶油製成

照片中白色的部分為柚子輕盈甘納許，非鮮奶油打發製作而成

而有一種更輕盈順口的口感
`
const description = `從電腦中選取圖檔，
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
  ${MEDIA_QUERY_SD} {
    flex-direction: column;
  }
`
const Column = styled.div`
  font-size: 20px;
  white-space: nowrap;
  color: #917856;
  font-weight: bold;
  padding: ${props => props.as === 'img' ? '0 28px' : '8px'};
`
const Row = styled.input`
  padding: ${props => props.as === 'img' ? '0 28px' : '8px'};
  width: ${props => props.as === 'img' ? '25%' : '100%'};
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
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  color: #917856;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5rem;
  padding: 0 24px;
`
const Button = styled.div`
  background: rgba(201, 186, 152, 0.7);
  padding: 8px;
  text-align: center;
  width: 15%;
  margin: 0 auto;
  margin-top: -36px;
  cursor: pointer;
  border-radius: 8px;
  &: hover {
    background: rgba(201, 186, 152, 2);
    transition: all 0.5s ease-out;
  }
`
const Submit = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 16px;
  background: white;
  border: 1px solid rgba(201, 186, 152, 0.9);
  margin: 0;
  margin-top: 36px;
  &: hover {
    background: rgba(201, 186, 152, 2);
    transition: all 0.5s ease-out;
  }
  margin-bottom: 18px;
`
function Input({name, value, as, src, children}) {
  return (
    <Content>
      <Column>{name}</Column>
      <Row value={value} as={as} src={src}/>
      <Desc>
          {children}
      </Desc>
   </Content>
  )
}

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`
const UpdateProductPage = () => {
    return (
      <div>
        <Wrapper>
          <Title>編輯商品：id = 1 柚香鐵觀音</Title>
            <Input name={'商品名：'} value={'柚香鐵觀音'}/>
            <Input name={'商品介紹：'} as={'textarea'} value={desc}/>
            <Input name={'售價：'} value={'220'}/>
            <Input name={'限量：'} value={'0'}/>
            <Bottom>
              <Submit>編輯完成</Submit>
            </Bottom>
        </Wrapper>
      </div>
    )
  
  }
  
export default UpdateProductPage