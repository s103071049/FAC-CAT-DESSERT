import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
// import { Link } from "react-router-dom"
import ProductsCategory from "./components/ProductsCategory";
import ProductsSection from "./components/ProductsSection";
import productsbanner from "../../components/img/banner/productsbanner.jpg";
import useCategory from "../../hooks/productHooks/useCategory";

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


const categories = ['全部品項','餅乾','蛋糕','巧克力','手工飲料']

export default function ProductsPage() {
  const {
    selectedCategory,
    handleCategoryClick,
  } = useCategory()
  
  return (
    <>
    <div>
      <IconMark>{selectedCategory}</IconMark>
      <ProductsWrapper>
        <ProductsCategory 
          selectedCategory={selectedCategory} 
          handleCategoryClick={handleCategoryClick} 
          categories={categories}
        />
        <ProductsBanner />
        <ProductsSection selectedCategory={selectedCategory}/>
      </ProductsWrapper>
    </div>
    </>
  );
}
