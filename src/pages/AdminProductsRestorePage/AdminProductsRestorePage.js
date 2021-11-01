import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../components/Style/style";
import useAdminRestoreProduct from "../../hooks/productHooks/useAdminRestoreProducts";
import { TdContext } from "./components/TdContext";
import PageBtn from "../../components/common/PageBtn";

import usePagination from "../../hooks/common/usePagination";

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
  width: 60%;
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
const AdminProductsContent = styled.div`
  padding: 15px 0;
  margin-bottom: 15px;
`;

const Table = styled.table`
  margin-bottom:40px;
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
    vertical-align: -webkit-baseline-middle;

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

const Tr = styled.tr`
`;

const AdminProductsRestorePage = () => {
  const {
    thcontexts,
    tdcontexts,
    handleRestoreBtnClick,
    fetchingSearchDeletedProduct,
    search,
    handleChange,
    fetchDeletedProduct,
    num,
    setNum,
    pagenum,
    setPageNum
  } = useAdminRestoreProduct()

  //分頁
  const pageSize = 4
  const {pageDetail, pageNext} = usePagination(tdcontexts, pageSize)

  
  return (
    <AdminProductsWrapper>
      <AdminProductsTitle>重上架已刪除商品</AdminProductsTitle>
      <AdminProductsInfo>
          <SearchInput 
            name="productSearch" 
            placeholder="搜尋已刪除之商品"
            onChange={handleChange}
            onKeyPress={(e) => {
              if(e.key === 'Enter') {
                search? fetchingSearchDeletedProduct(search):fetchDeletedProduct()
              }
            }}
          />
      </AdminProductsInfo>
      <AdminProductsContent>
        <Table>
          <Thead>
            <Tr>
              {thcontexts.map((thcontext,index) => (
                <Th key={index}>{thcontext}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {pageDetail.indexList.map((tdcontext, index) => (
              <TdContext 
                tdcontext={tdcontext} 
                key={index} 
                index={index}
                handleRestoreBtnClick={handleRestoreBtnClick}
              />
            ))}
          </Tbody>
        </Table>
         <PageBtn 
          pageNext={pageNext} 
          pageDetail={pageDetail}
          num={num}
          setNum={setNum}
          pagenum={pagenum}
          setPageNum={setPageNum}
        />
      </AdminProductsContent>
    </AdminProductsWrapper>
  );
};

export default AdminProductsRestorePage;
