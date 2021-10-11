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
import SearchPage from '../../pages/SearchPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import AddDiscountPage from '../../pages/AddDiscountPage';
import UpdateDiscountPage from '../../pages/UpdateDiscountPage';
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
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/admin/addDiscount">
            <AddDiscountPage />
          </Route>
          <Route path="/admin/updateDiscount">
            <UpdateDiscountPage />
          </Route>
        </Switch>
        <Footer />
      </Router >
    </Root >
  );
}

export default App;
