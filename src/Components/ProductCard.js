import { Button } from "react-bootstrap"
import {useState, useEffect} from "react"

const ProductCard = (props) => {

    const {product, handleAddProducttoCart} = props




    return(
        <div className="productCard-container w-3/4 ms-2 rounded-2xl bg-gray-200 flex row justify-center md:w-1/5 md:h-21 m-2">
            <h6 className="mb-0 pb-0">{product.title}</h6>
            <img className="h-1/3 w-1/3" src={product.image}></img>
            <p className="mb-0 text-center">${product.price}</p>
            <div className="flex justify-center h-10">
            <button className="bg-blue-500 text-white p-2" onClick={()=>{
               handleAddProducttoCart(product)
            }}>Add to Cart</button>
            </div>

        </div>

    )

    
}

export default ProductCard