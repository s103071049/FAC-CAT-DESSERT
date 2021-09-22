import styled from 'styled-components'
import banner from './Image/banner3.jpg'
const Wrap = styled.div`
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
`
function Banner() {
  return (
    <div>
      <Wrap/>
    </div>
  );
}

export default Banner;
