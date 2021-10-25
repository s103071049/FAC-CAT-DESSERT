import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../../components/Style/style";
import PageChange from "../../components/common/PageChange";
import { TdContext, thcontexts } from "./TdContext";
import { Link } from "react-router-dom";
import { FindDataAPI } from "../../API/fetchAPI";
import { useState } from "react";
import { getAuthToken } from "../../utils";
import { useLocation } from "react-router";
import { AuthContexts, AuthLoadingContext } from "../../context";

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
  const [discounts, setDiscounts] = useState([]);
  const { loading, setLoading } = useContext(AuthLoadingContext);
  let location = useLocation();

  const text = isRestore.isRestore
    ? { title: "還原運費促銷規則", plhder: "搜尋已刪除運費規則" }
    : { title: "促銷管理：運費", plhder: "搜尋運費規則" };

  useEffect(() => {
    FindDataAPI({ authorization: getAuthToken() }, "/findAllDiscounts").then(
      (data) => {
        const { Discounts } = data;
        const newDiscounts = [];
        Discounts.forEach((discount) => {
          if (discount.is_deleted === isRestore.isRestore) {
            newDiscounts.push(discount);
          }
        });
        setDiscounts(newDiscounts);
      }
    );
  }, [loading, location.pathname]);

  if (isRestore.isRestore) {
    return (
      <AdminProductsWrapper>
        <AdminProductsTitle>{text.title}</AdminProductsTitle>
        <AdminProductsInfo>
          <SearchInput name="productSearch" placeholder={text.plhder} />
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
                    isRestore={true}
                    key={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </AdminProductsContent>
        <PageChange />
      </AdminProductsWrapper>
    );
  } else {
    return (
      <AdminProductsWrapper>
        <AdminProductsTitle>{text.title}</AdminProductsTitle>
        <AdminProductsInfo>
          <SearchInput name="productSearch" placeholder="搜尋運費規則" />
          <div>
            <TitleButton to="/admin/discounts/restore">
              還原刪除規則
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
                    isRestore={false}
                    key={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </AdminProductsContent>
        <PageChange />
      </AdminProductsWrapper>
    );
  }
};

export default DiscountsPage;
