import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import {Product} from "./Product"
import "./Product.css"
import { TypesContext } from "../types/TypesProvider"



export const ProductList = () =>{

    const {products} = useContext(ProductContext)
    const {types} = useContext(TypesContext)
    return(
        <div className="products">
                {
                    products.map(p =>{
                        const candyType = types.find(t => t.id === p.typeId)
                       return <Product key={p.id} product={p} type={candyType}/>
                    }) 
                }

        </div>
    )


}