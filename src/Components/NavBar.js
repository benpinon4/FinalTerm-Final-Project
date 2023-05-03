import { Link, UNSAFE_DataRouterStateContext } from "react-router-dom";

import { useAuth } from "../Hooks/Auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart, AiTwotoneShopping } from "react-icons/ai";
import { RiAccountBoxFill } from "react-icons/ri";
import { BsCartFill } from "react-icons/bs";
import { RiLogoutBoxRFill, RiSearchLine } from "react-icons/ri";
import shoppingLogo from "../Images/shopping-cart-logo.png"

const NavigationBar = (props) => {
  const auth = useAuth();
  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
  const navigate = useNavigate();
  const [loginStatusMessage, setLoginStatusMessage] = useState("Logged Out");
  const [userStatusMessage, setUserStatusMessage] = useState("");
  const { setUserData } = props;

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken,
        },
      });
      const responseJSON = await response.json();
      console.log(responseJSON)
      if(responseJSON.success !== false){
        setLoginStatusMessage("Logged in as");
        setUserStatusMessage(responseJSON.verified.userData.email);
        console.log(userStatusMessage);
        console.log(loginStatusMessage);
        setUserData(responseJSON.verified.userData);
      }

    };

    if (auth.userToken !== null) {
      fetchMessage();
    }
    if (auth.userToken === null) {
      setLoginStatusMessage();
      setUserStatusMessage("");
    }
  }, [auth.userToken, loginStatusMessage]);

  return (
  // Main container for all of navbar and black header
  <div className="h-[150px]">
  <div className="flex justify-end column h-[20%] bg-black text-white">
  <p className="mx-auto">Post to our Forum</p> 
  <div className="flex column text-xs ">
  {loginStatusMessage === undefined && (<p>Logged Out</p>)}
  {loginStatusMessage !== undefined && (<p>{`${loginStatusMessage}: ${userStatusMessage}`}</p>)} 
        <p></p>
       

        </div>
  </div>

         
  <NavBar className="flex flex-row h-[80%] bg-zinc-500">
    {/* <div className="hidden md:block m-3 place-items-center w-20 text-center text-white"><img src={shoppingLogo}></img></div> */}

      {/* fullstack-final-client/src/Images/fake-logo-company-small.png */}

    {/* Links and Search Bar Container */}
    <div className="flex flex-col mx-auto w-3/6">
      <div className="flex column bg-white border border-black"> 
     
        <input 
          className="text-center w-full"
          type="text"
          placeholder="Search For Posts"
        ></input>
        <button ><RiSearchLine></RiSearchLine></button>
      </div>
   

      <br></br>

      {/* Nav Links */}
      <div className="flex justify-center md:flex justify-between">
        <Link className="no-underline text-white" to="/">
          Home
        </Link>
      </div>
      </div>

    <div className="flex flex-col mx-auto md:flex-row ">
     
        <Link
          className="no-underline text-white"
          to="/login"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Login"
        >
          <RiAccountBoxFill className="text-white text-4xl"></RiAccountBoxFill>
        </Link>

        <Link className="no-underline text-white" to="/shopping-cart" data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Shopping Cart">
          {/* <BsCartFill className="text-white text-4xl"></BsCartFill> */}
        </Link>

     



     
     
        <button
          onClick={() => {
            auth.logout();
            setUserData({})
            navigate("/login");
          }}
        >
          <RiLogoutBoxRFill className="text-white text-4xl" data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Logout" ></RiLogoutBoxRFill>
        </button>
     

 
    </div>
  </NavBar>
</div>
  );
};

export default NavigationBar;

// vw-100 h-[80px] bg-black z-10 fixed drop-shadow-lg

