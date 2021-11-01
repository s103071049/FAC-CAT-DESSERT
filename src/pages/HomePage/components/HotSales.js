import styled from "styled-components";
import {
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SD,
} from "../../../components/Style/style";
import useHotProducts from "../../../hooks/productHooks/useHotProducts";
import useFindRecommendProducts from "../../../hooks/productHooks/useFindRecommendProducts";
import useAddCartItems from "../../../hooks/carts/useAddCartItems";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2%;
  width: 100%;
`;
const Category = styled(Section)`
  flex-direction: column;
  align-items: center;
`;
const SectionTitle = styled.div`
  font-size: 24px;
  color: #64363c;
  font-weight: bold;
  padding: 5px 0;
  text-align: center;
`;
const SectionLine = styled.div`
  border: 1px solid #dac9a6;
  width: 100px;
`;
const Dessert = styled.div`
  display: flex;
  width: 20%;
  & + & {
    margin-left: 2%;
  }
  flex-direction: column;
  ${MEDIA_QUERY_MD} {
    width: 50%;
    padding: 2%;
    & + & {
      margin-left: 0%;
    }
  }
  ${MEDIA_QUERY_SD} {
    & + & {
      margin-left: 0%;
    }
  }
`;
const DessertImg = styled.div`
  width: 100%;
  height: 0;
  background: url(${(props) => props.url});
  border: 1px sold red;
  padding-bottom: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;
const DessertName = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 18px;
  color: #a96360;
`;
const DessertPrice = styled.div`
  margin-top: 4px;
  text-align: center;
  color: #a96360;
  margin-bottom: 8px;
`;
const CartButton = styled.button`
  margin: 0 auto;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 3%;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  transition: background 0.5s ease-out;
  white-space: nowrap;
  transition: all 0.05s ease-out;
  &:active {
    background: #e8e8d0;
    color: #616130;
    border: 2px solid #616130;
    transform: scale(0.8) perspective(1px);
  }
  &:hover {
    background: #e8e8d0;
  }
`;
const Img = styled.div``;
function Advertisement({ enTitle, chTitle }) {
  return (
    <>
      <SectionTitle>{enTitle}</SectionTitle>
      <SectionLine />
      <SectionTitle>{chTitle}</SectionTitle>
    </>
  );
}
function Sales({ product }) {
  const { handleAddProducts } = useAddCartItems(product, 1);

  return (
    <Dessert>
      <Img>
        <Link to={`/product/${product.id}`}>
          <DessertImg url={product.img_url} />
        </Link>
      </Img>
      <DessertName>{product.name}</DessertName>
      <DessertPrice>{product.price}</DessertPrice>
      <CartButton onClick={handleAddProducts}>加入購物車</CartButton>
    </Dessert>
  );
}
function HotSales() {
  const hotProducts = useHotProducts(4);
  const recommendProducts = useFindRecommendProducts(4);
  return (
    <div>
      <Category>
        <Advertisement enTitle={"Recommended Goods"} chTitle={"主廚推薦"} />
        <Section>
          {recommendProducts.map((product, index) => {
            return <Sales product={product} key={index} />;
          })}
        </Section>
      </Category>
      <Category>
        <Advertisement enTitle={"Hot Sales"} chTitle={"熱銷甜點"} />
        <Section>
          {hotProducts.map((hotProduct, index) => {
            return <Sales product={hotProduct} key={index} />;
          })}
        </Section>
      </Category>
    </div>
  );
}

export default HotSales;
