import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import RegisterUser from "./RegisterUser";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  // const [newUserClicked, setNewUserClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const auth = useAuth();

  const navigate = useNavigate();

  return (
    <div className="mt-20 border-2 bg-gray-100">
        <div>
        <p className="text-center">Login Here</p>
        </div>
        
        <div className="flex-row mx-auto w-1/2">
        <input
          className="text-center border-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="enter email here"
        ></input>        
        <input
          className="text-center border-2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          placeholder="enter password here"
        ></input>
        </div>

           {/* </div> */}
        {/* <br></br> */}
        {/* <Button
            onClick={(e) => {
              // setNewUserClicked(true);
            }}
          >
            New Users
          </Button> */}
          <div className="mt-10 text-center">
          <button className="border-2 bg-gray-200 w-1/5"
          onClick={async () => {
            const loginResult = await auth.login(email, password);

            if (loginResult.success === true) {
              navigate("/");
            }

            if (loginResult.success === false) {
              setLoginMessage(loginResult.message);
            }
          }}
        >
          Login
        </button>
          </div>

          <div className="text-center">
          <a className="no-underline" href="/registration">
        New Customers Click Here!
      </a>
      {loginMessage}

      {/* {newUserClicked && 
      <RegisterUser setNewUserClicked={setNewUserClicked} />} */}
          </div>

    </div>
  );
};

export default Login;
