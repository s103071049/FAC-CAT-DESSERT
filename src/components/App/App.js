import { useState, useEffect } from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { getAuthToken, setAuthToken } from "../../utils";
import { AuthContexts } from "../../context";
import Header from "../Header";
import Footer from "../Footer";
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import AboutPage from "../../pages/AboutPage";
import FaqPage from "../../pages/FaqPage";
import UserPage from "../../pages/UserPage";
import SearchPage from "../../pages/SearchPage";
import OrderWholeListPage from "../../pages/OrderWholeListPagePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import AddProductPage from "../../pages/AddProductPage";
import UpdateProductPage from "../../pages/UpdateProductPage";

import SingleProductPage from "../../pages/SingleProductPage";
import AdminProductsPage from "../../pages/AdminProductsPage";
import AdminProductsRestorePage from "../../pages/AdminProductsRestorePage";
import { DiscountEditPage, DiscountsPage } from "../../pages/discountPages";

import OrderPage from "../../pages/Admin/OrderPage";
import TransactionPage from "../../pages/TransactionPage";
import { getUser } from "../../WEBAPI";
import CartPage from "../../pages/CartPage";
import ProtectedRoutes from "../routes/ProtectedRoutes";

import { MEDIA_QUERY_MD } from "../Style/style";
const Root = styled.div`
  ${MEDIA_QUERY_MD} {
    padding-top: 70px;
  }
`;

function App() {
  const [user, setUser] = useState(null);
  const [searchProduct, setSearchProduct] = useState(null);
  const token = getAuthToken();
  useEffect(() => {
    if (token) {
      getUser().then((response) => {
        setUser(response.user);
      });
    }
  }, [token]);
  return (
    <AuthContexts.Provider
      value={{ user, setUser, searchProduct, setSearchProduct }}
    >
      <Root>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/user">{user && <UserPage />}</Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/transaction">
              <TransactionPage />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/product/:id">
              <SingleProductPage />
            </Route>
            <Route path="/search/:context">
              <SearchPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/faq">
              <FaqPage />
            </Route>
            <ProtectedRoutes exact path="/admin/discounts">
              <DiscountsPage isRestore={false} />
            </ProtectedRoutes>
            <ProtectedRoutes path="/admin/discounts/restore">
              <DiscountsPage isRestore={true} />
            </ProtectedRoutes>
            <ProtectedRoutes path="/admin/addDiscount">
              <DiscountEditPage />
            </ProtectedRoutes>
            <ProtectedRoutes path="/admin/updateDiscount/:id">
              <DiscountEditPage />
            </ProtectedRoutes>
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
            <Route path="/admin/orders">
              <OrderPage />
            </Route>
            <Route path="/admin/order/1">
              <OrderWholeListPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Root>
    </AuthContexts.Provider>
  );
}

export default App;
