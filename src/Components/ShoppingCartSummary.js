import {Link} from "react-router-dom"

const ShoppingCartSummary = (props)=>{
 
const {cartTotal, shoppingCartProductList} =props

return (
    <div className="hidden md:block bg-slate-300 w-100 h-100 border-2">
            <h3 >Cart Summary</h3>
    <div className="mb-10" >
        
        <div>

            <label>Cart Total: ${cartTotal}</label>
            {shoppingCartProductList.map((product, index)=>{
                return (
                    <div key={index} className="flex-row bg-gray-200 m-2 border-2">
                        <div className="bg-white flex-row mx-2 my-2 px-2">
                        <p>{product.title}</p>
                        <p>quantity: {product.quantity}</p>
                        </div>

                    </div>
                )
            })}
            
        </div>
    </div>
            
                 <Link className="w-10 no-underline text-white text-sm ml-5 p-2 border-2 bg-gray-500" to="/shopping-cart">Proceed to Checkout</Link>
            
           
    </div>

)
}

export default ShoppingCartSummary