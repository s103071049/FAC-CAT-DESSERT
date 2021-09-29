import React from "react";
import styled from "styled-components";
import homeIcon from '../../components/img/icon/home.svg'

import FaqItems from './FaqItems'


const FaqWrapper = styled.div`
  max-width:1042px;
  margin:30px auto;
  padding:0 16px;
  min-height:73vh;
`
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
const FaqContentWrapper = styled.section`
  padding:60px;
  font-size:18px;
  line-height:40px;
  letter-spacing:0.15em;
  color:#212529;
`




const FaqPage = () => {
  return (
    <>
      <FaqWrapper>
        <IconMark>
          <Icon src={homeIcon} />
          <Mark>{'>'} 常見問題</Mark>
        </IconMark>
        <FaqContentWrapper>
          <FaqItems />
        </FaqContentWrapper>
      </FaqWrapper>
    </>
  )
}

export default FaqPage