import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from "../../components/Style/style";
import cameraIcon from "../../components/img/icon/camera.svg";
import { imgurApi } from "../../API/imgurAPI";
import useUpdateProduct from '../../hooks/productHooks/useUpdateProduct'

const imgLoadingDesc = `
從電腦中選取圖檔，
最佳大小為 600px * 600px`;

const Wrapper = styled.div`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
  padding: 12px;
`;

const Title = styled.h2`
  color: #333;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 24px;
  }
  ${`@media screen and (max-width: 400px)`} {
    flex-direction: column;
    align-items: start;
  }
`;
const UploadImage = styled(Content)`
  ${`@media screen and (max-width: 604px)`} {
    flex-direction: column;
    align-items: start;
  }
`;
const Column = styled.div`
  font-size: 20px;
  white-space: nowrap;
  color: #917856;
  font-weight: bold;
  padding: 8px;
  flex-basis: 200px;
  ${`@media screen and (max-width: 400px)`} {
    flex-basis: 0;
  }
`;
const RadioWrapper = styled.div`
  padding: 8px;
  width: 100%;
  font-size: 18px;
  color: #917856;
  font-weight: bold;
  & label {
      margin-right:16px;
  }
  & span {
    padding-left:8px;
  }
`
const Row = styled.input`
  padding: 8px;
  width: 100%;
  height: ${(props) => (props.as === "textarea" ? "200px" : "auto")};
  outline: none;
  background: rgb(201, 186, 152, 0.4);
  border: rgb(201, 186, 152, 0.4);
  border-radius: 4px;
  font-size: 18px;
  color: #917856;
  &::placeholder {
    color: #917856;
    font-weight: bold;
  }
`;

const Img = styled.div`
  width: 100%;
  min-width: 240px;
  height: 0;
  background: url(${(props) => props.url});
  padding-bottom: 100%;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;

const Button = styled.div`
  background: rgba(201, 186, 152, 2);
  margin-top: 6px;
  padding: 16px 32px;
  text-align: center;
  color: #917856;
  cursor: pointer;
  border-radius: 8px;
  justify-self: center;
  display: inline-block;
  &:hover {
    color: white;
    font-weight: bold;
    transition: all 0.5s ease-out;
  }
  ${`@media screen and (max-width: 400px)`} {
    margin: 0 auto;
    white-space: nowrap;
  }
`;
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
  &:hover {
    color: white;
    background: rgba(201, 186, 152, 1.5);
    transition: all 0.5s ease;
  }
  margin-bottom: 18px;
`;
const Desc = styled.div`
  white-space: pre-wrap;
  line-height: 1.5rem;
  margin-bottom: 6px;
  color: #917856;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  ${MEDIA_QUERY_MD} {
    font-size: 18px;
  }
`;
const Wrap = styled.div`
  width: 30%;
  max-width: 1200px;
  ${MEDIA_QUERY_MD} {
    width: 240px;
    margin: 0 auto;
  }
  ${MEDIA_QUERY_SD} {
    width: 100%;
  }
`;
const Upload = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 26px;
  ${MEDIA_QUERY_MD} {
    margin: 0 auto;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function UploadImg({ name, desc }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ImgSrc, setImgSrc] = useState(cameraIcon);
  const [uploadImg, setUploadImg] = useState(null);
  const inputFileRef = useRef();
  const fileSelectorHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setImgSrc(reader.result);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const inputFileRefHandler = () => {
    inputFileRef.current.click();
  };
  const fileUploadHandler = (e) => {
    let formData = new FormData();
    formData.append("image", selectedFile);
    if (!selectedFile) {
      alert("尚未選取圖片");
    }
    if (selectedFile) {
      imgurApi(formData)
        .then((result) => {
          setUploadImg(result.data.link); // 拿到上傳圖片的 url
          alert("上傳成功");
        })
        .catch((error) => {
          alert("圖片處理異常，請稍後再試!");
          return;
        });
    }
  };
  return (
    <>
      <Content>
        <Column>{name}</Column>
      </Content>
      <UploadImage>
        <Wrap>
          <Img url={ImgSrc} onClick={inputFileRefHandler} />
        </Wrap>
        <Upload>
          <Desc>{desc}</Desc>
          <input
            style={{ display: "none" }}
            type="file"
            ref={inputFileRef}
            onChange={fileSelectorHandler}
            accept="image/*"
          />
          <Button onClick={fileUploadHandler}>上傳圖片</Button>
        </Upload>
      </UploadImage>
    </>
  );
}


const UpdateProductPage = () => {
  const {
    allValues,
    setAllValues,
    handleInputChange
  } = useUpdateProduct()
 
  const InputsRadio = () => {
    const categories = ['餅乾', '蛋糕', '巧克力', '手工飲料']
      return (
        <Content>
          <Column>商品類型：</Column>
          <RadioWrapper>
            {categories.map(item => {
              return (
                <label key={item}>
                  <input
                    type="radio"
                    name="category"
                    value={item}
                    onChange={handleInputChange}
                    checked={category === item}
                    />
                  <span>{item}</span>
                </label>
              )
            })}
          </RadioWrapper>
          
        </Content>
      )
  }
  
  return (
    <div>
      <Wrapper>
        <Title>編輯商品：id = 1 柚香鐵觀音</Title>
          <Content>
            <Column>商品名稱</Column>
            <Row
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder={"請輸入產品名稱"}
            />
          </Content>
           <Content>
            <Column>商品描述</Column>
            <Row
              name="desc"
              value={desc}
              as={"textarea"}
              onChange={handleInputChange}
              placeholder={"請輸入產品介紹"}
            />
          </Content>
          <Content>
            <Column>商品售價</Column>
            <Row
              name="price"
              value={price}
              onChange={handleInputChange}
              placeholder={"請輸入產品售價"}
            />
          </Content>
         
          <InputsRadio/>
         
          <UploadImg name="imgUrl" desc={`${imgLoadingDesc}`} />
        <Bottom>
          <Submit>編輯完成</Submit>
        </Bottom>
      </Wrapper>
    </div>
  );
};

export default UpdateProductPage;
