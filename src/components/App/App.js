import styled from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import AboutPage from '../../pages/AboutPage';
import FaqPage from '../../pages/FaqPage';
import SearchPage from '../../pages/SearchPage';


import OrderWholeListPage from '../../pages/OrderWholeListPagePage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import AddProductPage from '../../pages/AddProductPage';
import UpdateProductPage from '../../pages/UpdateProductPage';
import RegisterPage from '../../pages/RegisterPage';
import AddDiscountPage from '../../pages/AddDiscountPage';
import UpdateDiscountPage from '../../pages/UpdateDiscountPage';
import singleProductPage from '../../pages/SingleProductPage'
import OrderWholeListPage from '../../pages/OrderWholeListPagePage';
import AdminProductsPage from '../../pages/AdminProductsPage';
import AdminProductsRestorePage from '../../pages/AdminProductsRestorePage';


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
            {/* <ProductsPage /> */}
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

          <Route path="/admin/order/1">
            <OrderWholeListPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
           </Route>
          <Route path="/admin/addDiscount">
            <AddDiscountPage />
          </Route>
          <Route path="/admin/updateDiscount">
            <UpdateDiscountPage />
          </Route>
          <Route exact path="/admin/products">
            <AdminProductsPage />
          </Route>
          <Route path="/admin/products/restore">
            <AdminProductsRestorePage />
          </Route>
          <Route path="/admin/addProduct">
            <AddProductPage />
          </Route>
          <Route path="/admin/updateProduct">
            <UpdateProductPage />
          </Route>
          <Route path="/admin/order/1">
            <OrderWholeListPage />
          </Route>
          <Route path="product" component={singleProductPage}/>


        </Switch>
        <Footer />
      </Router >
    </Root >
  );
}

export default App;
