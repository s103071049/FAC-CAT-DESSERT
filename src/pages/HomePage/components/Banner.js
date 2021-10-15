import styled from "styled-components";
import banner from "../../../components/img/banner/banner3.jpg";
import { MEDIA_QUERY_MD } from "../../../components/Style/style";
const Wrap = styled.div`
  margin-bottom: 28px;
  position: relative;
  height: 400px;
  background: url(${banner}) center/cover no-repeat;
  &:after {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  ${MEDIA_QUERY_MD} {
    margin-bottom: 0;
  }
`;
function Banner() {
  return (
    <div>
      <Wrap />
    </div>
  );
}

export default Banner;
