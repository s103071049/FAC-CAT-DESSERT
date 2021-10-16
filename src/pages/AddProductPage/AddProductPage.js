import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from "../../components/Style/style";
import cameraIcon from "../../components/img/icon/camera.svg";

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
function Input({ name, value, as, placeholder }) {
  const [allValues, setAllValues] = useState({
    "商品名：": "",
    "商品介紹：": "",
    "售價：": "",
    "限量：": "",
  });
  const handleInputChange = (e) => {
    console.log(e.target.name);
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };
  return (
    <Content>
      <Column>{name}</Column>
      <Row
        name={name}
        value={allValues[value]}
        as={as}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </Content>
  );
}

function UploadImg({ name, src, desc }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadImg, setUploadImg] = useState(cameraIcon);
  const fileSelectorHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const fileUploadHandler = (e) => {
    let formdata = new FormData();
    formdata.append("image", selectedFile);
    let requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Client-ID 623487535f2f5ba",
      },
      body: formdata,
      redirect: "follow",
    };
    fetch("https://api.imgur.com/3/image", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!result.data.link) {
          alert("尚未上傳圖片");
          setUploadImg(cameraIcon);
          return;
        }
        console.log("result", result);
        console.log("url", result.data.link); // 拿到上傳圖片的 url
        setUploadImg(result.data.link);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <Content>
        <Column>{name}</Column>
      </Content>
      <UploadImage>
        <Wrap>
          <Img url={uploadImg} />
        </Wrap>
        <Upload>
          <Desc>{desc}</Desc>
          <input type="file" onChange={fileSelectorHandler} />
          <Button onClick={fileUploadHandler}>上傳圖片</Button>
        </Upload>
      </UploadImage>
    </>
  );
}
const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const AddProductPage = () => {
  return (
    <div>
      <Wrapper>
        <Title>新增商品：</Title>
        <Input
          name={"商品名："}
          value={"商品名："}
          placeholder={"請輸入商品名稱"}
        />
        <Input
          name={"商品介紹："}
          as={"textarea"}
          value={"商品介紹："}
          placeholder={"請輸入產品介紹"}
        />
        <Input
          name={"售價："}
          value={"售價："}
          placeholder={"請輸入產品售價"}
        />
        <Input
          name={"限量："}
          value={"限量："}
          placeholder={"請輸入產品限定數量"}
        />
        <UploadImg
          name={"上傳圖片："}
          src={cameraIcon}
          desc={`${imgLoadingDesc}`}
        />
        <Bottom>
          <Submit>提交</Submit>
        </Bottom>
      </Wrapper>
    </div>
  );
};

export default AddProductPage;
