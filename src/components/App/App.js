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
import AdminDiscountsPage from '../../pages/AdminDiscountsPage';
import AdminDiscountsRestorePage from '../../pages/AdminDiscountsRestorePage';

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
          <Route exact path="/admin/discounts">
            <AdminDiscountsPage />
          </Route>
          <Route path="/admin/discounts/restore">
            <AdminDiscountsRestorePage />
          </Route>
        </Switch>
        <Footer />
      </Router >
    </Root >
  );
}

export default App;
