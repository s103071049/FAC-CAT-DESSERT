import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
import ProductsSection from "./components/ProductsSection";
import productsbanner from "../../components/img/banner/productsbanner.jpg";

const ProductsWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const ProductsBanner = styled.div`
  height: 275px;
  background-image: url(${productsbanner});
  background-size: 1024px;
  margin-bottom: 80px;
`;

export default function NewProductsPage() {
  return (
    <>
      <div>
        <IconMark>新品上市</IconMark>
        <ProductsWrapper>
          <ProductsBanner />
          <ProductsSection />
        </ProductsWrapper>
      </div>
    </>
  );
}
