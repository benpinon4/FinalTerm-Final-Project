import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/Auth"
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'

const RegisterUser = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const auth = useAuth()

  const {  } = props;

   


  return (
    <div className="mt-20 px-10 border-2 bg-gray-100">
      <div className="mt-5">
             <p className="text-center">Create Your Account</p>
      </div>
      <div className="flex-row mx-2">
      <input className="text-center border-2"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="enter email here"
      ></input>
      <br></br>
      <input className="text-center border-2"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="enter password here"
      ></input>
             </div>
   
      <div className="mt-10 text-center">
      <Button
        onClick={async()=>{
            
            
          const registerResult = await auth.register(email, password)



          if(registerResult.success === false){
            setMessage(registerResult.message)
            return
          }
          if(registerResult.success === true){
            navigate('/login')
          }
          

           
        }}
      >
        Create User
      </Button>
      </div>
      <h4>{message}</h4>
    </div>
  );
};

export default RegisterUser;
