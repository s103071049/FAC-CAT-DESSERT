import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../../components/Style/style";
import { TdContext, thcontexts } from "./TdContext";
import { Link } from "react-router-dom";
import useDiscount from "../../hooks/discountHooks/useDiscount";

const AdminProductsWrapper = styled.div`
  max-width: 1042px;
  margin: 30px auto;
  padding: 0 16px;
  min-height: 73vh;
`;
const AdminProductsTitle = styled.h2`
  font-size: 36px;
  margin: 0;
  ${MEDIA_QUERY_MD} {
    font-size: 30px;
  }
  ${MEDIA_QUERY_SD} {
    font-size: 24px;
  }
`;
const AdminProductsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;
const SearchInput = styled.input`
  padding: 8px;
  width: 40%;
  outline: none;
  background: rgb(201, 186, 152, 0.4);
  border: rgb(201, 186, 152, 0.4);
  border-radius: 4px;
  font-size: 20px;
  color: #917856;
  &::placeholder {
    color: #917856;
    font-weight: bold;
  }
  ${MEDIA_QUERY_MD} {
    margin-bottom: 30px;
    width: 100%;
  }
`;
const TitleButton = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #000;
  padding: 5px 10px;
  border: 1px solid #c9ba98;
  border-radius: 8px;
  & + & {
    margin-left: 10px;
  }
  &:hover {
    background: #60373e;
    color: #fff;
  }
  ${MEDIA_QUERY_SD} {
    font-size: 20px;
  }
`;
const AdminProductsContent = styled.div`
  padding: 15px 0;
  margin-bottom: 15px;
`;

const Table = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  font-size: 20px;

  & td,
  & th {
    text-align: center;
  }
  ${MEDIA_QUERY_MD} {
    display: block;
    & tr,
    & td,
    & th {
      text-align: start;
    }
    & td {
    }
  }
`;
const Thead = styled.thead`
  & tr {
    height: 60px;
    font-size: 24px;
    color: #917856;
    font-weight: bold;
  }
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;
const Tbody = styled.tbody`
  & tr {
    height: 60px;
    border-bottom: 1px solid #917856;
  }
  & tr:last-child {
    border: 0;
  }
  ${MEDIA_QUERY_MD} {
    display: block;
    & tr {
      height: auto;
      padding: 8px 0;
    }
  }
`;
const Th = styled.th``;

const Tr = styled.tr``;

const DiscountsPage = (isRestore) => {
  const { discounts, search, setSearch, searchDiscounts, handleChange } =
    useDiscount(isRestore);

  const restoreData = isRestore.isRestore
    ? {
        title: "還原運費促銷規則",
        plhder: "搜尋已刪除運費規則",
        returnUrl: "/admin/discounts",
        returnName: "返回促銷管理",
      }
    : {
        title: "促銷管理：運費",
        plhder: "搜尋運費規則",
        returnUrl: "/admin/discounts/restore",
        returnName: "還原刪除規則",
      };

  return (
    <AdminProductsWrapper>
      <AdminProductsTitle>{restoreData.title}</AdminProductsTitle>
      <AdminProductsInfo>
        <SearchInput
          name="productSearch"
          placeholder={restoreData.plhder}
          onChange={handleChange(setSearch)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchDiscounts(search);
            }
          }}
        />
        <div>
          <TitleButton to={restoreData.returnUrl}>
            {restoreData.returnName}
          </TitleButton>
          <TitleButton to="/admin/addDiscount">新增規則</TitleButton>
        </div>
      </AdminProductsInfo>
      <AdminProductsContent>
        <Table>
          <Thead>
            <Tr>
              {thcontexts.map((thcontext, index) => (
                <Th key={index}>{thcontext}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {discounts.map((discount, index) => {
              return (
                <TdContext
                  tdcontext={discount}
                  isRestore={isRestore.isRestore}
                  key={index}
                />
              );
            })}
          </Tbody>
        </Table>
      </AdminProductsContent>
    </AdminProductsWrapper>
  );
};

export default DiscountsPage;
