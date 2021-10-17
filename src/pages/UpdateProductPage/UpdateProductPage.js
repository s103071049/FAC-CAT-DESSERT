import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from "../../components/Style/style";
import cameraIcon from "../../components/img/icon/camera.svg";

const desc = `2020新品，日本柚子帶出輕盈微酸的口感。

臺灣鐵觀音帶出濃郁茶香

－
日本100%柚子汁

柚子輕盈甘納許

臺灣鐵觀音甘納許

**甘納許為巧克力加上鮮奶油製成

照片中白色的部分為柚子輕盈甘納許，非鮮奶油打發製作而成

而有一種更輕盈順口的口感
`;

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
  &:: placeholder {
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
  padding: 16px 32px;
  text-align: center;
  color: #917856;
  cursor: pointer;
  border-radius: 8px;
  justify-self: center;
  display: inline-block;
  &: hover {
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
  &: hover {
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
  padding: 0 28px;
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
function Input({ name, value, as }) {
  const [allValues, setAllValues] = useState({
    "商品名：": "柚香鐵觀音",
    "商品介紹：": `${desc}`,
    "售價：": 200,
    "限量：": 500,
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
        placeholder={"請輸入"}
      />
    </Content>
  );
}

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
          setImgSrc(cameraIcon);
          return;
        }
        console.log("result", result);
        console.log("url", result.data.link); // 拿到上傳圖片的 url
        setUploadImg(result.data.link);
        alert("上傳成功");
      })
      .catch((error) => {
        alert("圖片處理異常，請稍後再試");
        console.log("error", error);
        return;
      });
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
const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const UpdateProductPage = () => {
  return (
    <div>
      <Wrapper>
        <Title>編輯商品：id = 1 柚香鐵觀音</Title>
        <Input name={"商品名："} value={"商品名："} />
        <Input name={"商品介紹："} as={"textarea"} value={"商品介紹："} />
        <Input name={"售價："} value={"售價："} />
        <Input name={"限量："} value={"限量："} />
        <UploadImg
          name={"上傳圖片："}
          src={cameraIcon}
          desc={`${imgLoadingDesc}`}
        />
        <Bottom>
          <Submit>編輯完成</Submit>
        </Bottom>
      </Wrapper>
    </div>
  );
};

export default UpdateProductPage;
