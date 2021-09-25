import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  height: 400px;
  background: url('${props => props.imgUrl}') center/cover no-repeat;
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
function Banner({ imgUrl }) {
  return (
    <div>
      <Wrap imgUrl={ imgUrl } />
    </div>
  );
}

export default Banner;