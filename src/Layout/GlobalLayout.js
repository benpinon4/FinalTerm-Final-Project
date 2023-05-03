import { Outlet } from "react-router-dom"
import NavigationBar from "../Components/NavBar"


const GlobalLayout = (props) => {

   const {setUserData} = props

   
   return (
    <div>
    <NavigationBar setUserData={setUserData} />
    <Outlet />
    </div>
   )
}

export default GlobalLayout