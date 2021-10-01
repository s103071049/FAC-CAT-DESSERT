import styled from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import HomePage from "../../pages/HomePage"
import ProductsPage from "../../pages/ProductsPage"
import AboutPage from '../../pages/AboutPage'
import FaqPage from '../../pages/FaqPage';

const Root = styled.div`
  
`

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/product">
            {/* <ProductPage /> */}
          </Route>
<<<<<<< HEAD
          <Route path="/about">
            <AboutPage />
=======
          <Route path="/faq">
      <FaqPage />
>>>>>>> a68f6d31f259aac2f6dbc43f90a74b7a4c466763
    </Route>
  </Switch>
    <Footer />
      </Router >
    </Root >
  );
}

export default App;
