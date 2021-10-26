import React from "react";
import Item from "../../components/common/Item.js";
import { Wrapper, Section } from "../../components/Style/style.js";
import ProductsSectionTiTleContent from "../../components/common/ProductsSectionTiTleContent.js";
import SingleProduct from "./SingleProduct.js";
import { useParams, useHistory } from "react-router-dom";
import { getProduct, getAllProducts } from "../../WEBAPI";
import { useState, useEffect, useContext } from "react";
import { AuthLoadingContext } from "../../context";

function randomArr(allProducts, totalRecommends) {
  let arr = [];
  for (let i = 0; i < allProducts; i++) {
    arr.push(i);
  }
  arr.sort(() => {
    return Math.random() - 0.5;
  });
  arr.length = totalRecommends;
  return arr;
}
const SingleProductPage = () => {
  const totalRecommends = 4;
  const [dessert, setDessert] = useState("");
  const [recommends, setRecommend] = useState([]);
  const { setLoading } = useContext(AuthLoadingContext);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    getProduct(id).then((response) => {
      if (!response.success) {
        setLoading(false);
        return history.goBack();
      }
      setLoading(false);
      setDessert(response.product);
    });
  }, [id, history, setLoading]);
  useEffect(() => {
    setLoading(true);
    let randomResult = [];
    getAllProducts()
      .then((response) => {
        if (!response.success) {
          setLoading(false);
          return alert("QQ 推薦商品處理異常，非常抱歉!");
        }
        setLoading(false);
        let data = response.products.filter((each) => each.id !== id);
        return data;
      })
      .then((data) => {
        let randArr = randomArr(data.length, totalRecommends);
        for (let i = 0; i < randArr.length; i++) {
          let key = randArr[i];
          randomResult.push(data[key]);
        }
        setRecommend(randomResult);
      });
  }, [id, setLoading]);
  return (
    <div>
      {dessert && (
        <Wrapper>
          <SingleProduct dessert={dessert} setLoading={setLoading} />
          <ProductsSectionTiTleContent>推薦商品</ProductsSectionTiTleContent>
          <Section>
            {recommends.map((dessert, i) => (
              <Item dessert={dessert} key={i} />
            ))}
          </Section>
        </Wrapper>
      )}
    </div>
  );
};

export default SingleProductPage;
