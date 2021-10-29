import styled from "styled-components";
import numeric2 from "../../../components/img/icon/numeric2.svg";
import RenderShippingForm from "./RenderShippingForm";
const Container = styled.div`
  margin-top: 30px;
  border: 1px solid #9ca4aa;
  padding: 16px 22px;
  font-size: 18px;
  @media screen and (max-width: 698px) {
    font-size: 16px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  margin-left: 12px;
`;
const Body = styled.div``;

const Shipping = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Header>
        <div>
          <img src={numeric2} alt="shopping shipping cotent" />
        </div>
        <Title>付款運送內容</Title>
      </Header>
      <Body>
        <RenderShippingForm data={data} />
      </Body>
    </Container>
  );
};

export default Shipping;
