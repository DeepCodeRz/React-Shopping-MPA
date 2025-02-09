import productImg from '../../assets/product.jpg';
import { useContext } from 'react';
import { BagContext } from '../../App';
import { Link } from 'react-router';

export default function Card({id, name, manufacturer, description, price}) {
    const { bagItems, setBagItems } = useContext(BagContext)
    const isInCart = bagItems["cartItems"].find(item => item.name === name)
    const isFavorite = bagItems["favoriteItems"].find(item => item.name === name)

    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:cursor-pointer transition-all ease">
            <img src={productImg} alt="Image of the product" className="w-full h-64 rounded-t-xl"/>
            <button
                className="px-2 py-1 absolute mt-2 ml-2 hover:bg-gray-300 hover:rounded-full hover:cursor-pointer"
                onClick={() => {
                    if (isFavorite) {
                        setBagItems({
                            ...bagItems,
                            favoriteItems: bagItems.favoriteItems.filter(item => item.name !== name)
                        })
                    } else {
                        setBagItems({
                            ...bagItems,
                            favoriteItems: [...bagItems.favoriteItems, {name, manufacturer, description, price}]
                        })
                    }
                }}
            >
                {isFavorite ? <i className="text-2xl ri-heart-fill"></i> : <i className="text-2xl ri-heart-line"></i>}
            </button>
            <div className="w-full h-full p-4 flex flex-col justify-between gap-4">
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h2 className="w-58 overflow-auto text-xl font-semibold">{name}</h2>
                        <Link to={`/products/${id}`}><span className="text-sm text-blue-500">View details</span></Link>
                    </div>
                    <span className="text-sm font-semibold">{manufacturer}</span>
                </div>
                <span className="w-72 overflow-auto">{description}</span>
                <div className="w-full flex justify-between items-center gap-2">
                    {isInCart ?
                        <Link to="bag" className="w-full">
                            <button
                                className={`w-full p-4 bg-white text-black border border-black rounded-lg hover:cursor-pointer transition-all ease`}
                            >
                                Go to cart
                            </button>
                        </Link>
                        :
                        <button
                            className={`w-full p-4 bg-black text-white hover:bg-white hover:text-black border border-black rounded-lg hover:cursor-pointer transition-all ease`}
                            onClick={() => {
                                setBagItems({
                                    ...bagItems,
                                    cartItems: [...bagItems.cartItems, {name, manufacturer, description, price}]
                                })
                            }}
                        >Add to cart</button>
                    }
                    <span
                        className="py-4 p-2 flex items-center bg-gray-200 text-lg font-semibold rounded-lg">${price}</span>
                </div>
            </div>
        </div>
    )
}