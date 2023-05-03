import {Button} from "react-bootstrap"
import {useEffect, useState} from "react"
import ProductCard from "./ProductCard"
const ShoppingCartProductCard = (props) => {


    const {product, handleAddFromShoppingCart, handleDeleteProductfromCart, shoppingCartProductList } = props


    // let yesNo = ""
    // let count = 0
    //Item Count Functionality

    // for (let i = 0; i < shoppingCartProductList.length; i++){
    //     yesNo = "yes"

    // if(shoppingCartProductList[i].title === product.title){
    //     yesNo = "yes"
    // }
    // if(shoppingCartProductList[i].title !== product.title){
    //     yesNo = "no"
    // }
    // if(yesNo === "yes"){
    //     count++
    // }
    // }
    // console.log(count)





    



    // if(product.render === false) {
    //     return(
    //       <></>
    //     )
    // }

    // if(product.render === undefined){
        return(
            
            <div className="shoppingListCard-container flex justify-between place-items-center mx-3 w-3/4 border-2">
              <div className="w-1/2">
      
              <p>{product.title}</p>
            
                    <div className="flex">
                        <img className="h-20" src={product.image}></img> 
                    </div>
                </div>  
            <div className="flex place-items-center ">
   
            
            
            <div className="itemQuantityButtonsAdjuster-container">
            <button className="bg-blue-500 w-5 mr-2 rounded"onClick={()=>{
                // itemCount()
                handleAddFromShoppingCart(product)                
            }}>+</button>
            <br></br>
            <button className="bg-blue-500 w-5 mr-2 rounded" onClick={()=>{
                // if(itemQuantity < 1){
                //     setItemQuantiy(0)
                // }
                // if(itemQuantity >= 1){
                    // itemCount()
                    handleDeleteProductfromCart(product)
                // }
                
            }}>-</button>
            
            </div>  
            </div>
           
            <div className="itemQuantityAdjuster-container flex place-items-center">
            <label className="border-2 w-8">{product.quantity}</label>
            </div>
            <p className="pt-3">${(product.price*product.quantity).toFixed(2)}</p>
        </div>
    )

    
    // }

}

export default ShoppingCartProductCard