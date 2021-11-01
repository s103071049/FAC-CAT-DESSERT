import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
import OrderStatusFilter from "./components/OrderStatusFilter";
import OrderStatusSection from "./components/OrderStatusSection";
import useFindAllOrder from "../../hooks/orders/useFIndAllOrder";
import PageBtn from "../../components/common/PageBtn";
import usePagination from "../../hooks/common/usePagination";

const Wrapper = styled.div`
  max-width: 1042px;
  margin: 30px auto;
  padding: 0 16px;
  min-height: 73vh;
`;
const Main = styled.main`
  margin-bottom: 60px;
`;

const OrderPage = () => {
  const {
    currentOrders,
    selectOrderStatus,
    handleOrderFilterClick,
    num,
    setNum,
    pagenum,
    setPageNum,
  } = useFindAllOrder();
  const pageSize = 5;
  const { pageDetail, pageNext } = usePagination(currentOrders, pageSize);
  console.log(pageDetail);
  return (
    <Wrapper>
      <IconMark>訂單管理</IconMark>
      <Main>
        <OrderStatusFilter
          selectOrderStatus={selectOrderStatus}
          handleOrderFilterClick={handleOrderFilterClick}
        />
        <OrderStatusSection
          orders={pageDetail.indexList}
          selectOrderStatus={selectOrderStatus}
        />
      </Main>
      {/* 分頁元件 */}
      <PageBtn
        pageNext={pageNext}
        pageDetail={pageDetail}
        num={num}
        setNum={setNum}
        pagenum={pagenum}
        setPageNum={setPageNum}
      />
    </Wrapper>
  );
};

export default OrderPage;
