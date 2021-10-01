import styled from 'styled-components'
import homeIcon from './img/icon/home.svg'

const IconMark = styled.div`
  margin-top:10px;
  display:flex;
`
const Icon = styled.img`
  padding:0 px;
  width:15px;
  height:15px;
`
const Mark = styled.p`
  padding-left:8px;
  margin:0;
`
const HomeIcon = ({pageName}) => {
  return (
    <IconMark>
    <Icon src={homeIcon} />
    <Mark>{'>'} {pageName}</Mark>
  </IconMark>
  )
}

export default HomeIcon;