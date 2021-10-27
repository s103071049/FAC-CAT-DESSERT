import React, { useCallback, useEffect,useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../../components/Style/style";
import { TdContext } from "./components/TdContext";
import { Link } from "react-router-dom";
import useAdminProduct from "../../hooks/productHooks/useAdminProducts";
import PageBtn from "../../components/common/PageBtn";


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
  min-height:680px;
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
  const {
    thcontexts, 
    tdcontexts,
    handleDeleteBtnClick,
    fetchProducts,
    search,
    handleChange,
    fetchingSearchProduct
   } = useAdminProduct()
   const pageSize =4
   const [pageDetail, setPageDetail] = useState({
      indexList:[],//當前渲染的頁面數據
      totalData:tdcontexts,
      current: 1, //當前頁碼
      pageSize:pageSize, //每頁顯示的條數
      goValue:0,  //要去的條數index
      totalPage:0//總頁數
   })
  //const setPage = (num) => {
  //  console.log(num)
  //    setPageDetail(prevState => {
  //      return {
  //        ...prevState,
  //        indexList:tdcontexts.slice(num,num+pageDetail.pageSize)
  //      }
  //  })
  //}

  const setPage = useCallback((num)=>{

    setPageDetail(prevState => {
          return {
            ...prevState,
            indexList:tdcontexts.slice(num,num+pageDetail.pageSize)
          }
    })

  },[pageDetail.pageSize,tdcontexts])

  const pageNext = useCallback((num) => {
      setPage(num)
  }, [setPage])
  
  useEffect(()=>{
    setPageDetail(prevState=>{
      return {
        ...prevState,
        indexList:tdcontexts.slice(0,pageDetail.pageSize),
        totalPage:Math.ceil( tdcontexts.length/prevState.pageSize)
      }
    })
  }, [tdcontexts,pageDetail.pageSize])


  return (
    <AdminProductsWrapper>
      <AdminProductsTitle>商品管理</AdminProductsTitle>
      <AdminProductsInfo>
        <SearchInput 
          name="productSearch" 
          placeholder="搜尋商品" 
          onChange={handleChange}
          onKeyPress={(e) => {
            if(e.key === 'Enter') {
              search? fetchingSearchProduct(search):fetchProducts()
            }
          }}
        />
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
            {pageDetail.indexList.map((tdcontext, index) => (
              <TdContext 
                tdcontext={tdcontext} 
                index={index} 
                key={index} 
                handleDeleteBtnClick={handleDeleteBtnClick}
              />
            ))}
          </Tbody>
        </Table>
        <PageBtn pageNext={pageNext} pageDetail={pageDetail}/>
      </AdminProductsContent>
    </AdminProductsWrapper>
  );
};

export default AdminProductsPage;
