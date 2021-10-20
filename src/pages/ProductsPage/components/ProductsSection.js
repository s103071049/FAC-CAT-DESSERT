import { useState } from "react";
import styled from "styled-components";
import {
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SD,
} from "../../../components/Style/style";
import PageChange from "../../../components/common/PageChange";
import ProductsSectionTiTleContent from "../../../components/common/ProductsSectionTiTleContent";
import squares from "../../../components/img/icon/squares.svg";
import list from "../../../components/img/icon/list.svg";
import cake1 from "../../../components/img/product/cake.jpg";
import cake2 from "../../../components/img/product/cake4.jpg";
import cake3 from "../../../components/img/product/cake3.jpg";
import { Link } from "react-router-dom";

function ProductsSectionTiTle({
  handletoggleSquares,
  handletoggleLists,
  section,
}) {
  let IsLists = null;
  if (section === "lists") {
    IsLists = "Lists";
  }
  let IsSuares = null;
  if (section === "sqares") {
    IsSuares = "sqares";
  }
  return (
    <ProductsSectionTiTleWapper>
      <ProductsSectionTiTleContent>所有甜點</ProductsSectionTiTleContent>
      <ProductsSectionTiTleInfo>
        <ProductsSectionTiTleInfoContent>
          共6個商品
        </ProductsSectionTiTleInfoContent>
        <TitleButtonWrapper>
          <TitleSquaresButton onClick={handletoggleSquares} $section={IsSuares}>
            <Icon src={squares} />
          </TitleSquaresButton>
          <TitleListsButton onClick={handletoggleLists} $section={IsLists}>
            <Icon src={list} />
          </TitleListsButton>
        </TitleButtonWrapper>
      </ProductsSectionTiTleInfo>
    </ProductsSectionTiTleWapper>
  );
}
const ProductsSectionTiTleWapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 20px;
  ${MEDIA_QUERY_SD} {
    display: block;
  }
`;
const ProductsSectionTiTleInfo = styled.div`
  display: flex;
  align-items: center;
`;
const ProductsSectionTiTleInfoContent = styled.p`
  margin: 0px 15px 0 0;
`;
const TitleButtonWrapper = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 8px;
`;
const TitleSquaresButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  background-color: ${(props) => (props.$section ? "#E2E2E2" : "white")};
  border-radius: 8px 0 0 8px;
  &:hover {
    background-color: #e2e2e2;
  }
`;
const TitleListsButton = styled(TitleSquaresButton)`
  background-color: ${(props) => (props.$section ? "#E2E2E2" : "white")};
  border-radius: 0 8px 8px 0;
  &:hover {
    background-color: #e2e2e2;
  }
`;
const Icon = styled.img`
  padding: 0px;
  width: 15px;
  height: 15px;
  fill: red;
`;
function ProductsSectionSqaresContents() {
  return (
    <ProductsSectionContentsWrapper>
      <ProductWapper>
        <ProductImageWrapper>
          <Link to={"#"}>
            <ProductImage img={cake1} />
          </Link>
        </ProductImageWrapper>
        <ProductName>阿嬤的蘋果派</ProductName>
        <ProductPrice>NT$ 160</ProductPrice>
        <ProductButton>加入購物車</ProductButton>
      </ProductWapper>
      <ProductWapper>
        <ProductImageWrapper>
          <Link to={"#"}>
            <ProductImage img={cake2} />
          </Link>
        </ProductImageWrapper>
        <ProductName>我的梅果花園</ProductName>
        <ProductPrice>NT$ 180</ProductPrice>
        <ProductButton>加入購物車</ProductButton>
      </ProductWapper>
      <ProductWapper>
        <ProductImageWrapper>
          <Link to={"#"}>
            <ProductImage img={cake3} />
          </Link>
        </ProductImageWrapper>
        <ProductName>藍莓珠寶盒</ProductName>
        <ProductPrice>NT$ 100</ProductPrice>
        <ProductButton>加入購物車</ProductButton>
      </ProductWapper>
      <ProductWapper>
        <ProductImageWrapper>
          <Link to={"#"}>
            <ProductImage img={cake1} />
          </Link>
        </ProductImageWrapper>
        <ProductName>阿嬤的蘋果派</ProductName>
        <ProductPrice>NT$ 160</ProductPrice>
        <ProductButton>加入購物車</ProductButton>
      </ProductWapper>
      <ProductWapper>
        <ProductImageWrapper>
          <Link to={"#"}>
            <ProductImage img={cake2} />
          </Link>
        </ProductImageWrapper>
        <ProductName>我的梅果花園</ProductName>
        <ProductPrice>NT$ 180</ProductPrice>
        <ProductButton>加入購物車</ProductButton>
      </ProductWapper>
      <ProductWapper>
        <ProductImageWrapper>
          <Link to={"#"}>
            <ProductImage img={cake3} />
          </Link>
        </ProductImageWrapper>
        <ProductName>藍莓珠寶盒</ProductName>
        <ProductPrice>NT$ 100</ProductPrice>
        <ProductButton>加入購物車</ProductButton>
      </ProductWapper>
    </ProductsSectionContentsWrapper>
  );
}
const ProductsSectionContentsWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ProductWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 10px 0;
  margin-bottom: 20px;
  ${MEDIA_QUERY_MD} {
    width: 47%;
  }
  @media screen and (max-width: 460px) {
    width: 98%;
  }
`;
const ProductImageWrapper = styled.div`
  width: 100%;
`;
const ProductImage = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  margin-bottom: 10px;
  &:hover {
    filter: brightness(110%);
  }
`;
const ProductName = styled.p`
  font-size: 18px;
  margin: 0 0 15px 0;
`;
const ProductPrice = styled.p`
  margin: 0;
`;
const ProductButton = styled.button`
  display: block;
  width: 125px;
  height: 40px;
  margin: 0 auto;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 3%;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  transition: background 0.5s ease-out;
  margin-top: 10px;
  &:hover {
    background: #60373e;
  }
`;

function ProductsSectionListsContents() {
  return (
    <ProductsSectionListsContentsWrapper>
      <ProductsListsWrapper>
        <div style={{ display: "flex" }}>
          <ProductListsImageWrapper>
            <ProductListsImage img={cake1} />
          </ProductListsImageWrapper>
          <ProductListsInfo>
            <ProductListsInfoSection>
              <div>
                <ProductListsName>阿嬤的蘋果派</ProductListsName>
                <ProductListsCaption>
                  這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~
                </ProductListsCaption>
              </div>
              <ProductListsPrice>NT$ 160</ProductListsPrice>
              <ProductListsMDButton>加入購物車</ProductListsMDButton>
            </ProductListsInfoSection>
          </ProductListsInfo>
        </div>
        <ProductListsButtonWrapper>
          <ProductListsButton>加入購物車</ProductListsButton>
        </ProductListsButtonWrapper>
      </ProductsListsWrapper>
      <ProductsListsWrapper>
        <div style={{ display: "flex" }}>
          <ProductListsImageWrapper>
            <ProductListsImage img={cake2} />
          </ProductListsImageWrapper>
          <ProductListsInfo>
            <ProductListsInfoSection>
              <div>
                <ProductListsName>我的梅果花園</ProductListsName>
                <ProductListsCaption>
                  這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~
                </ProductListsCaption>
              </div>
              <ProductListsPrice>NT$ 180</ProductListsPrice>
              <ProductListsMDButton>加入購物車</ProductListsMDButton>
            </ProductListsInfoSection>
          </ProductListsInfo>
        </div>
        <ProductListsButtonWrapper>
          <ProductListsButton>加入購物車</ProductListsButton>
        </ProductListsButtonWrapper>
      </ProductsListsWrapper>
      <ProductsListsWrapper>
        <div style={{ display: "flex" }}>
          <ProductListsImageWrapper>
            <ProductListsImage img={cake3} />
          </ProductListsImageWrapper>
          <ProductListsInfo>
            <ProductListsInfoSection>
              <div>
                <ProductListsName>藍莓珠寶盒</ProductListsName>
                <ProductListsCaption>
                  這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~這是說明喔~
                </ProductListsCaption>
              </div>
              <ProductListsPrice>NT$ 100</ProductListsPrice>
              <ProductListsMDButton>加入購物車</ProductListsMDButton>
            </ProductListsInfoSection>
          </ProductListsInfo>
        </div>
        <ProductListsButtonWrapper>
          <ProductListsButton>加入購物車</ProductListsButton>
        </ProductListsButtonWrapper>
      </ProductsListsWrapper>
    </ProductsSectionListsContentsWrapper>
  );
}

const ProductsSectionListsContentsWrapper = styled.div``;
const ProductsListsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #e2e2e2;
  @media screen and (max-width: 550px) {
    display: block;
  }
`;
const ProductListsImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-right: 50px;
  @media screen and (max-width: 550px) {
    width: 40%;
    margin-right: 20px;
  }
`;
const ProductListsImage = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
  &:hover {
    filter: brightness(110%);
  }
`;
const ProductListsInfo = styled.div`
  width: 60%;
  @media screen and (max-width: 550px) {
    width: 50%;
  }
`;
const ProductListsInfoSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    justify-content: flex-start;
  }
`;
const ProductListsName = styled.h3`
  margin: 0 0 10px 0;
  font-size: 36px;
  @media screen and (max-width: 550px) {
    font-size: 24px;
  }
`;
const ProductListsCaption = styled.p`
  color: #a3a3a3;
  font-size: 20px;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 4; //行數
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  ${MEDIA_QUERY_MD} {
    -webkit-line-clamp: 2; //行數
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
const ProductListsPrice = styled.p`
  font-size: 24px;
  color: #e55555;
  margin: 0;
`;
const ProductListsButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
const ProductListsButton = styled.button`
  width: 125px;
  height: 40px;
  margin: 0 auto;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 3%;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  transition: background 0.5s ease-out;
  &:hover {
    background: #60373e;
  }
`;
const ProductListsMDButton = styled(ProductListsButton)`
  display: none;
  @media screen and (max-width: 550px) {
    display: block;
    margin-top: 70px;
  }
`;
export default function ProductsSection() {
  const [section, setSection] = useState("sqares");
  const handletoggleSquares = () => {
    setSection("sqares");
  };
  const handletoggleLists = () => {
    setSection("lists");
  };
  return (
    <div>
      <ProductsSectionTiTle
        handletoggleSquares={handletoggleSquares}
        handletoggleLists={handletoggleLists}
        section={section}
      />
      {section === "sqares" && <ProductsSectionSqaresContents />}
      {section === "lists" && <ProductsSectionListsContents />}
      <PageChange />
    </div>
  );
}
