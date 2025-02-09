import productImg from '../../assets/product.jpg';
import {useContext} from "react";
import {BagContext} from "../../App.jsx";

export default function BagProductCard({type, name, manufacturer, description, price}) {
    const { bagItems, setBagItems } = useContext(BagContext)

    return (
        <div className="flex border border-gray-200 rounded-xl gap-4 shadow-md hover:shadow-lg hover:cursor-pointer transition-all ease">
            <img src={productImg} alt="Item Image" className="w-48 h-48 rounded-l-xl"/>
            <div className="w-full flex flex-col gap-4 p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <span className="text-sm font-semibold">{manufacturer}</span>
                <span>{description}</span>
                <div className="flex justify-between items-center gap-4">
                    <span className="text-lg font-semibold">${price}</span>
                    <button
                        className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 hover:cursor-pointer transition-all ease"
                        onClick={() => {
                            if (type === "cartItem") {
                                setBagItems({
                                    ...bagItems,
                                    cartItems: bagItems.cartItems.filter(item => item.name !== name)
                                })
                            } else if (type === "favoriteItem") {
                                setBagItems({
                                    ...bagItems,
                                    favoriteItems: bagItems.favoriteItems.filter(item => item.name !== name)
                                })
                            }
                        }}
                    >
                        {type === "cartItem" ? "Remove from cart" : "Remove from favorites"}
                    </button>
                </div>
        </div>
        </div>
    )
}