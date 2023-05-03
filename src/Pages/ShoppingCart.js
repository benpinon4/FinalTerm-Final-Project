import ShoppingCartProductCard from "../Components/ShoppingCartProductCard";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ShoppingCartPage = (props) => {
  const {
    shoppingCartProductList,
    handleAddFromShoppingCart,
    handleDeleteProductfromCart,
    cartTotal,
    setShoppingCartProductList,
    userData,
    setnocompleteOrder,
  } = props;

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
  const navigate = useNavigate();

  const handleCreatePurchaseOrder = (CartList) => {
    const purchaseOrder = {
      iscomplete: false,
      userID: userData.userID,
      userEmail: userData.email,
      cartTotal: cartTotal,
      date: new Date(),
      items: CartList.map((item) => {
        const returnObject = {
          itemID: item.id,
          image: item.image,
          quantity: item.quantity,
        };
        return returnObject;
      }),
    };

    handleCreateOrder(purchaseOrder);
  };

  const handleCreateOrder = async (order) => {
    const orderResponse = await fetch(`${urlEndpoint}/orders/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order,
      }),
    });

    const payloadResponse = await orderResponse.json();
    console.log(payloadResponse);
    setnocompleteOrder(payloadResponse);
  };

  return (
    <div className="md:flex h-100 justify-end text-center">
   
      <div className="shoppingCartList-container items-start">
      {shoppingCartProductList.length < 1 && (<div>
              <p>Shopping Cart</p>
              <p>Shopping Cart Empty</p>
      </div>
)}

        {shoppingCartProductList.length >= 1 && (
          <div className="flex row w-3/4">
            <h5>Shopping Cart</h5>
            {shoppingCartProductList.map((product, index) => {
              return (
                <ShoppingCartProductCard
                  key={index}
                  product={product}
                  handleAddFromShoppingCart={handleAddFromShoppingCart}
                  handleDeleteProductfromCart={handleDeleteProductfromCart}
                  shoppingCartProductList={shoppingCartProductList}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="md:w-1/4 md:flex md:justify-center vh-100 bg-gray-100">
        <div className="border-2 mt-10 h-2/4 bg-white mx-2 px-2">
          <div>
            Shopping Cart Summary
          </div>
        
        <br></br>
        Cart Total: ${cartTotal.toFixed(2)}
        <div className="flex row justify-center">
          <button className="border-2 "
            onClick={() => {
              navigate("/shipping-billing");
              handleCreatePurchaseOrder(shoppingCartProductList);
            }}
          >
            Proceed to Checkout
          </button>
          
          <button className="border-2"
            onClick={() => {
              setShoppingCartProductList([]);
            }}
          >
            Empty Cart
          </button>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
