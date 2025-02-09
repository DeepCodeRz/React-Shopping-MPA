import productImg from '../../assets/product.jpg';
import { useParams } from "react-router"
import {useEffect, useState} from "react";

export default function ProductDetail() {
    const { id } = useParams()

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data.products)
                console.log(product)
            })
    }, [])

    return (
        <div className="w-1/3 flex flex-col items-center justify-center">
            <img src={productImg} alt="Product Image" className="w-full h-72 object-cover rounded-lg"/>
            <div className="w-full p-4 flex flex-col items-start gap-4">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <span className="text-xl">{product.manufacturer}</span>
                <p className="text-lg">{product.description}</p>
                <span className="text-2xl font-semibold">${product.price}</span>
            </div>
        </div>
    )
}