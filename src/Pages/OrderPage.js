import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderPage = (props) => {
  const { nocompleteOrder, shippingInfo, billingInfo } = props;

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

  const navigate = useNavigate()




  console.log(shippingInfo);
  console.log(billingInfo);

  const completeOrder = {
   
      iscomplete: true,
      userID: nocompleteOrder.orderSummary.userID,
      userEmail: nocompleteOrder.orderSummary.userEmail,
      cartTotal: nocompleteOrder.orderSummary.cartTotal,
      date: new Date(),
      items: nocompleteOrder.orderSummary.items,
    }
  console.log(nocompleteOrder)
  const handleSendOrder = async() => {
      const orderResponse = await fetch(`${urlEndpoint}/orders/send-order`, {
          method: "POST",
              headers: {
                          "Content-Type" : "application/json"
                       },
              body: JSON.stringify({
                completeOrder,
                      })
              })

      const payloadResponse = await orderResponse.json()
      console.log(payloadResponse)

  }

  return (
    <div className="flex flex-col place-items-center">
      <div className="bg-gray-200 flex flex-col w-3/4 place-items-center m-10">
      <div className="flex flex-col w-4/5 bg-white m-10 place-items-center">
        <div>
            
        </div>
            <h5>Order Page</h5>
            <h6>OrderSummary</h6>
            <div>Order Total: ${(nocompleteOrder.orderSummary.cartTotal).toFixed(2)}</div>
            <div className="flex flex-col">
            {nocompleteOrder.orderSummary.items.map((item, index) => {
                return (
                <div className="flex flex-row m-1 border-2" key={index}>
                    <img className="w-1/4" src={item.image}></img>
                    {/* <h4>{item.title}</h4> */}
                    <h4>Quantity: {item.quantity}</h4>
                </div>
                );
            })}
            </div>
            <div className="border-2 m-2">
            Shipping Address:
            <p>
                {shippingInfo[0].streetAdress} {shippingInfo[0].aptUnit}{" "}
                {shippingInfo[0].city} {shippingInfo[0].state} {shippingInfo[0].zip}
            </p>
            </div>

            <Button className="m-2"
            onClick={() => {
                handleSendOrder()
                navigate("/confirmation-page")

            }}
            >
            Confirm Order
            </Button>
      </div>
    </div>
    </div>
    
  );
};

export default OrderPage;
