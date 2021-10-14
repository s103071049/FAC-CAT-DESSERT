import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../../components/style/style";
import PageChange from "../../components/common/PageChange";
import { TdContext } from "./components/TdContext";
import { Link } from "react-router-dom";
import { thcontexts, tdcontexts } from "./components/contextItem";

const AdminProductsWrapper = styled.div`
  max-width: 1042px;
  margin: 30px auto;
  padding: 0 16px;
  min-height: 73vh;
`;
const AdminProductsTitle = styled.h2`
  font-size: 36px;
  margin: 0;
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
  font-size: 24px;
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
      display: block;
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

const AdminProductsPage = () => {
  return (
    <AdminProductsWrapper>
      <AdminProductsTitle>商品管理</AdminProductsTitle>
      <AdminProductsInfo>
        <SearchInput name="productSearch" placeholder="搜尋商品" />
        <div>
          <TitleButton to="/admin/products/restore">還原刪除商品</TitleButton>
          <TitleButton to="/admin/addProduct">新增商品</TitleButton>
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
            {tdcontexts.map((tdcontext, index) => (
              <TdContext tdcontext={tdcontext} key={index} />
            ))}
          </Tbody>
        </Table>
      </AdminProductsContent>
      <PageChange />
    </AdminProductsWrapper>
  );
};

export default AdminProductsPage;
