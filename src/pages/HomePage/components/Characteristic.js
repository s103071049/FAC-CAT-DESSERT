import styled from 'styled-components'
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD} from '../../../components/Style/style.js'
import cat1 from './Image/cat1.png'
import cat2 from './Image/cat2.png'
import cat3 from './Image/cat3.png'

const Section = styled.div`
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
`
const SectionItem = styled.div`
  width: 33%;
  background: #dac9a6;
  & + & {
    margin-left: 4%;
  }
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4%;
`
const Title = styled.div`
  text-align: center;
  font-size: 22px;
  padding: 3%;
  color: white;
  font-weight: bold;
  ${MEDIA_QUERY_SD} {
    font-size: 16px;
  }
`
const Desc = styled.div`
  text-align: center;
  font-size: 16px;
  ${MEDIA_QUERY_SD} {
    font-size: 14px;
  }
`
const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px dashed #9e7a7a;
`

function Characteristic() {
  return (
    <div>
      <Section>
        <SectionItem>
          <Img src={cat2}/>
          <Title>在地的食材</Title>
          <Desc>有機最安心!</Desc>
        </SectionItem>
        <SectionItem>
          <Img src={cat3}/>
          <Title>一千種味道</Title>
          <Desc>吃過都說讚!</Desc>
        </SectionItem>
        <SectionItem>
          <Img src={cat1}/>
          <Title>網購新鮮送</Title>
          <Desc>幸福好滋味!</Desc>
        </SectionItem>
      </Section>
    </div>
  );
}

export default Characteristic;
