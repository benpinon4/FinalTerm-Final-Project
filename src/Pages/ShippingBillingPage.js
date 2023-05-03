import {Button} from "react-bootstrap"
import {useState} from "react"
import {useNavigate} from "react-router-dom"





const ShippingBillingPage = (props) => {

    const[streetAdress, setStreetAddress] = useState("")
    const[aptUnit, setAptUnit] = useState("")
    const[city, setCity] = useState("")
    const[state, setState] = useState("")
    const[zip, setZip] = useState("")
    const[billingStreetAdress, setBillingStreetAddress] = useState("")
    const[billingAptUnit, setBillingAptUnit] = useState("")
    const[billingCity, setBillingCity] = useState("")
    const[billingState, setBillingState] = useState("")
    const[billingZip, setBillingZip] = useState("")
    const[readOnlyvar, setReadOnlyVar] = useState(false)


    const navigate = useNavigate()
    

    const {userData, nocompleteOrder, setShippingInfo, setBillingInfo,shippingInfo, billingInfo} = props
   
    const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

    console.log(userData)
    console.log(nocompleteOrder)
    console.log(shippingInfo)
    console.log(billingInfo)
    const handleSendShippingInfo = async() => {
        console.log(userData)
        console.log(nocompleteOrder)
        const orderResponse = await fetch(`${urlEndpoint}/orders/shipping-billing`, {
            method: "POST",
                headers: {
                            "Content-Type" : "application/json"
                         },
                body: JSON.stringify({
                    userID: userData.userID,
                    shippingInfo: shippingInfo,
                    billingInfo: billingInfo,
                    orderID: nocompleteOrder.orderID
                        })
                })
       const ResponseJSON = await orderResponse.json()
        console.log(ResponseJSON)

      
            }

    return (
        <div className="flex flex-col place-items-center max-w-[375px] min-w-full">
            <div>
                   <h4>Shipping Page</h4>
            </div>
                    Shipping Info
            <div className="border-2 w-[375px] m-2">
                <label>Street Address:
                <input className="border-2 w" type="text" onChange={(e)=>{
                    setStreetAddress(e.target.value)
                }}></input>
                </label>
                <label>Apt/Unit #: 
                <input className="border-2" type="text" onChange={(e)=>{
                    setAptUnit(e.target.value)
                }}></input>
                </label>
                <label>City:   
                <input className="border-2" type="text" onChange={(e)=>{
                    setCity(e.target.value)
                }}></input>
                </label>
                <label>State: 
                <input className="border-2" type="text" onChange={(e)=>{
                    setState(e.target.value)
                }}></input>
                </label>
                <label>Zip Code: 
                <input className="border-2" type="text" onChange={(e)=>{
                    setZip(e.target.value)
                }}></input>
                </label>
            </div>
                Billing Info
            <div className="border-2 w-[375px] m-2">
            <label className="">Check Box if Billing Info Matches Shipping Info:
                <input type="checkbox" onChange={(e)=>{
                    
                    if(e.target.checked === true){
                   
                        setBillingStreetAddress(streetAdress)
                        setBillingAptUnit(aptUnit)
                        setBillingCity(city)
                        setBillingState(state)
                        setBillingZip(zip)
                        setReadOnlyVar(true)                        
                    }
                    if(e.target.checked === false){
                       
                        setBillingStreetAddress("")
                        setBillingAptUnit("")
                        setBillingCity("")
                        setBillingState("")
                        setBillingZip("")
                        setReadOnlyVar(false)                                            
                    }
                }}></input>
            </label>
            <label>Street Address:
                <input readOnly={readOnlyvar} className="border-2" type="text" value={billingStreetAdress} onChange={(e)=>{
                    setBillingStreetAddress(e.target.value)

                } }></input>
                </label>
                <label>Apt/Unit #: 
                <input  readOnly={readOnlyvar} className="border-2" type="text" value={billingAptUnit} onChange={(e)=>{
                    setBillingAptUnit(e.target.value)
                }}></input>
                </label>
                <label>City:   
                <input readOnly={readOnlyvar} className="border-2" type="text" value={billingCity} onChange={(e)=>{
                    setBillingCity(e.target.value)
                }}></input>
                </label>
                <label>State: 
                <input readOnly={readOnlyvar} className="border-2" type="text" value={billingState} onChange={(e)=>{
                    setBillingState(e.target.value)
                }}></input>
                </label>
                <label>Zip Code: 
                <input readOnly={readOnlyvar} className="border-2" type="text" value={billingZip} onChange={(e)=>{
                    setBillingZip(e.target.value)
                }}></input>
                </label>
            </div>
         <div>
         <Button onClick={()=>{
            if(streetAdress !== ("") && city !== ("") && state !== ("") && zip !== ("") && billingStreetAdress !== ("") && billingCity !== ("")&& billingState !== ("") && billingZip !== ("")){
            setShippingInfo([{
                streetAdress: streetAdress,
                aptUnit: aptUnit,
                city: city,
                state: state,
                zip: zip,
            }])
            setBillingInfo([{
                billingStreetAdress: billingStreetAdress,
                billingAptUnit: billingAptUnit,
                billingCity: billingCity,
                billingState: billingState,
                billingZip: billingZip,
            }])
        }  

        }}>Save Info</Button>
        <Button onClick={()=>{
            console.log(shippingInfo.length)
            console.log(shippingInfo)
            if(shippingInfo !== {} || billingInfo !== {} ){
                handleSendShippingInfo()
                navigate("/order-review")
                setAptUnit("")
                setStreetAddress("")
                setCity("")
                setState("")
                setZip("")
                setBillingAptUnit("")
                setBillingStreetAddress("")
                setBillingCity("")
                setBillingState("")
                setBillingZip("")
                // setShippingInfo([])
                // setBillingInfo([])

        }}}>Review Order</Button>
        
         </div>
        
            </div>
            
    )

}

export default ShippingBillingPage