
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layout/GlobalLayout";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ShoppingCartPage from "./Pages/ShoppingCart";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import { useState } from "react";
import OrderPage from "./Pages/OrderPage";
import ShippingBillingPage from "./Pages/ShippingBillingPage";
import ConfirmPage from "./Pages/ConfirmationPage";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  const [shoppingCartProductList, setShoppingCartProductList] = useState([]);
  const [userData, setUserData] = useState({})
  const[shippingInfo, setShippingInfo] = useState([])
  const[billingInfo, setBillingInfo] = useState([])
  const [nocompleteOrder, setnocompleteOrder] = useState({})

   
  

  const handleAddProducttoCart = (product) => {
    const productQuantity = product.quantity
  
    const titleCheck = (element) => {
      return element.title === product.title;
    };
    const titleCheck1= shoppingCartProductList.some(titleCheck)

    if (shoppingCartProductList.some(titleCheck) !== true) {

      let addProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        product: product.description,
        category: product.category,
        image: product.image,
        rating: product.rating,
        quantity: 1,

      };
      setShoppingCartProductList([
        ...shoppingCartProductList, addProduct
        
      ]);

    }


    if (shoppingCartProductList.some(titleCheck) === true) {
      const indexAdd = shoppingCartProductList.findIndex((cartProduct) => {
        return cartProduct.title === product.title;
      });

      let addRenderProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        product: product.description,
        category: product.category,
        image: product.image,
        rating: product.rating,
        quantity: (shoppingCartProductList[indexAdd].quantity) + 1,

      };

      const updatedShoppingCart = [...shoppingCartProductList];

      const spliceShopCart = updatedShoppingCart.splice(
        indexAdd,
        1,
        addRenderProduct
      );


      setShoppingCartProductList(updatedShoppingCart);
    }

  };


  const handleDeleteProductfromCart = (product) => {
    const indexToDelete = shoppingCartProductList.findIndex((cartProduct) => {

      return cartProduct.title === product.title;
    });

    const updatedShoppingCart = [...shoppingCartProductList];

    if (product.quantity > 1) {


      let deleteRenderProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        product: product.description,
        category: product.category,
        image: product.image,
        rating: product.rating,
        quantity: Number(product.quantity) - 1,
      };

      const spliceShopCart = updatedShoppingCart.splice(
        indexToDelete,
        1,
        deleteRenderProduct
      );


      setShoppingCartProductList(updatedShoppingCart);
      return;
    }
    if ((product.quantity = 1)) {
      const spliceShopCart = updatedShoppingCart.splice(indexToDelete, 1);
      setShoppingCartProductList(updatedShoppingCart);
      return;
    }
  };


  const handleAddFromShoppingCart = (product) => {
    const indexAdd = shoppingCartProductList.findIndex((cartProduct) => {
      return cartProduct.title === product.title;
    });

    let addRenderProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      product: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
      quantity: Number(product.quantity + 1),
    };

    const updatedShoppingCart = [...shoppingCartProductList];

    const spliceShopCart = updatedShoppingCart.splice(
      indexAdd,
      1,
      addRenderProduct
    );

    setShoppingCartProductList(updatedShoppingCart);
  };

  let cartTotal = 0;

  for (let i = 0; i < shoppingCartProductList.length; i++) {
    cartTotal = cartTotal + shoppingCartProductList[i].price*shoppingCartProductList[i].quantity;
  }

  



  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout setUserData={setUserData} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage userData={userData} />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/registration",
          element: <RegistrationPage />,
        },
        {
          path: "/products",
          element: (
            <ProductsPage handleAddProducttoCart={handleAddProducttoCart} cartTotal={cartTotal} shoppingCartProductList={shoppingCartProductList}/>
          ),
        },
        {
          path: "/shopping-cart",
          element: (
            <ShoppingCartPage
              shoppingCartProductList={shoppingCartProductList}
              handleAddFromShoppingCart={handleAddFromShoppingCart}
              handleDeleteProductfromCart={handleDeleteProductfromCart}
              cartTotal={cartTotal}
              setShoppingCartProductList={setShoppingCartProductList}
              userData={userData}
              setnocompleteOrder={setnocompleteOrder}
            />
          ),
        },
        {
          path: "/shipping-billing",
          element: (
            <ShippingBillingPage userData={userData} nocompleteOrder={nocompleteOrder} setShippingInfo={setShippingInfo} setBillingInfo={setBillingInfo} shippingInfo={shippingInfo} billingInfo={billingInfo}  />
          ),
        },
        {
          path: "/order-review",
          element: (
            <OrderPage nocompleteOrder={nocompleteOrder} shippingInfo={shippingInfo} billingInfo={billingInfo} />
          ),
        },
        {
          path: "/confirmation-page",
          element: (
            <ConfirmPage nocompleteOrder={nocompleteOrder} shippingInfo={shippingInfo} billingInfo={billingInfo} />
          ),
        },
      ],
    },
  ]);

  return (
    
    <div className="App">
       <ChakraProvider>
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
      </ChakraProvider>
    </div>
  );
}

export default App;
