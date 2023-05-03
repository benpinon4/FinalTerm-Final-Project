import ProductCard from "../Components/ProductCard";
import ShoppingCartPage from "./ShoppingCart";
import { useState, useEffect } from "react";
import ShoppingCartSummary from "../Components/ShoppingCartSummary.js";

const ProductsPage = (props) => {
  const { handleAddProducttoCart, cartTotal, shoppingCartProductList } = props;

  const [productList, setProductList] = useState([]);



  return (
    <div className="flex justify-center">

    <div className="flex justify-center row w-100">

      <div className="text-center">
           Products Page
      </div>
      {/* <div className="flex justify-center"> */}
      <div className="flex column justify-center md:flex column justify-center flex-wrap border-solid ">
        {productList.map((product, index) => {
          return (
            <ProductCard 
              key={index}
              product={product}
              handleAddProducttoCart={handleAddProducttoCart}
            />
          );
        })}
      {/* </div> */}
      </div>

      

      
    </div>
    <div className="md:w-2/5">
      <ShoppingCartSummary cartTotal={cartTotal} shoppingCartProductList={shoppingCartProductList} />
      </div>
    </div>
  );
};

export default ProductsPage;
