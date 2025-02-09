import BagProductCard from "./BagProductCard.jsx";
import { BagContext } from '../../App';
import { useContext } from "react";

export default function CartProducts() {
    const { bagItems, setBagItems } = useContext(BagContext)

    const cartProductElements = bagItems.cartItems.map((item, index) => {
        return (
            <BagProductCard
                key={index}
                type="cartItem"
                name={item.name}
                manufacturer={item.manufacturer}
                description={item.description}
                price={item.price}
            />
        )
    })

    return (
        <div className="flex flex-col gap-2">
            {cartProductElements.length ? cartProductElements : <h1 className="text-2xl font-semibold">No items in cart</h1>}
        </div>
    )
}