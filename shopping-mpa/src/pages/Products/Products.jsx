import { useState, useEffect } from "react";
import Card from "./Card.jsx";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                console.log(products)
            })
    }, [])

    const productCards = products.map(product => {
        return <Card key={product.id} id={product.id} name={product.name} manufacturer={product.manufacturer} description={product.description} price={product.price} />
    })

    return (
        <div className="w-screen flex flex-wrap gap-2 justify-center">
            {productCards}
        </div>
    )
}