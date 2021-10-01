import styled from 'styled-components'
import Banner from './components/Banner.js'
import Features from './components/Features.js'
import HotSales from './components/HotSales.js'

const Wrapper = styled.div`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
`
function HomePage() {
  return (
    <div>
      <Banner/>
      <Wrapper>
        <Features/>
        <HotSales/>
      </Wrapper>
    </div>
  );
}

export default HomePage;