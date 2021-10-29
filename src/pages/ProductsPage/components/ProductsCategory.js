import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../../components/Style/style";

const CategoryWrapper = styled.ul`
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;
const Li = styled.li`
  list-style-type: none;
  width: 100%;
  ${MEDIA_QUERY_MD} {
    & + & {
      margin-top: 10px;
    }
  }
`;
const CategoryItem = styled.div`
  padding: 10px;
  display: inline-block;
  text-decoration: none;
  color: #000000;
  width: 80%;
  text-align: center;
  cursor:pointer;

  color: ${(props) => (props.$active ? "#B19C73" : "#000000")};
  border-bottom: ${(props) =>
    props.$active ? "1px solid #B19C73" : "1px solid #000000"};
  &:hover {
    color: #b19c73;
    border-bottom: 1px solid #b19c73;
  }
  ${MEDIA_QUERY_MD} {
    width: 100%;
  }
`;


export default function ProductsCategory({categories, selectedCategory, handleCategoryClick}) {

  const RenderCategoryItems =() => {
    return categories.map(category => {
      return (
        <Li key={category}>
           <CategoryItem 
            $active={category === selectedCategory }
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryItem>
        </Li>
      )
    })
  }
  return (
    <CategoryWrapper>
      <RenderCategoryItems/>
    </CategoryWrapper>
  );
}
