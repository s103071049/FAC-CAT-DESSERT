import styled from 'styled-components'
import Header from '../.././components/Header/Header.js'
import Banner from './components/Banner.js'
import Characteristic from './components/Characteristic.js'
import HotSales from './components/HotSales.js'
import Footer from '../.././components/Footer/Footer.js'

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`
function HomePage() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Wrapper>
        <Characteristic/>
        <HotSales/>
      </Wrapper>
      <Footer/>
    </div>
  );
}

export default HomePage;