import React from "react"
import "./Product.css"

export const Product = ({product, type}) =>(
    <section className="product">
        <address className="product_name">{product.name}</address>
        <p className="product_price">Price: ${product.price}</p>
        <p className="product_type">Type: {type.name}</p>
    </section>

)