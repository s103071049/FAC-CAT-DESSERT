import styled from 'styled-components'
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD} from '../../../components/Style/style.js'

import truck from './Image/truck.svg'
import vegetables from './Image/vegetables.svg'
import thumb from './Image/positive-vote.svg'

const Section = styled.div`
  display: flex;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  background: #dac9a6;
  border-radius: 6px;
  margin-bottom: 24px;
  ${MEDIA_QUERY_MD} {
    margin: 24px auto;
  }
  ${MEDIA_QUERY_SD } {
    display: none;
  }
`
const SectionItem = styled.div`
  width: 33%;
  & + & {
    margin-left: 4%;
  }
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4%;
`
const Title = styled.div`
  padding: 2% 0;
  text-align: center;
  font-size: 22px;
  color: #60373e;
  font-weight: bold;
  ${MEDIA_QUERY_MD} {
    font-size: 18px;
  }
`
const Content = styled.div`
  padding: 2% 0;
  text-align: center;
  font-size: 16px;
  ${MEDIA_QUERY_MD} {
    font-size: 14px;
  }
`
const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  max-width: 100px;
  max-height: 100px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  border: 2px dashed #60373e;
  padding: 4px;
`
const Desc = styled.div`
  margin-top: 4%;
  color: #60373e;
  font-weight: bold;
`
function Characteristic() {
  return (
    <div>
      <Section>
        <SectionItem>
          <Img src={vegetables}/>
          <Desc>
            <Title>嚴選好食材</Title>
            <Content>有機最安心!</Content>
          </Desc>
        </SectionItem>
        <SectionItem>
          <Img src={thumb}/>
          <Desc>
            <Title>一千種味道</Title>
            <Content>吃過都說讚!</Content>
          </Desc>
        </SectionItem>
        <SectionItem>
          <Img src={truck}/>
          <Desc>
            <Title>在家輕鬆購</Title>
            <Content>網購新鮮送!</Content>
          </Desc>
        </SectionItem>
      </Section>
    </div>
  );
}

export default Characteristic;
