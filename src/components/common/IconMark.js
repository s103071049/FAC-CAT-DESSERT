import styled from 'styled-components'
import homeIcon from "../img/icon/home.svg"


const IconMarkWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
`

const Icon = styled.img`
  padding:0px;
  width: 15px;
  height: 15px;
`
const Mark = styled.p`
  padding-left:8px ;
  margin: 0;
`

const Hr = styled.hr`
  border:0;
  height: 1px;
  background-color: #E2E2E2;
`
function IconMark({context}) {
  return (
    <div>
        <IconMarkWrapper>
          <Icon src={homeIcon}/>
          <Mark>{'>'} {context}</Mark>
        </IconMarkWrapper>
        <Hr/>
    </div>
  );
}

export default IconMark;