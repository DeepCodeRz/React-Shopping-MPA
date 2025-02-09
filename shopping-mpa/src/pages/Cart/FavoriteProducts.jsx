import BagProductCard from "./BagProductCard.jsx";
import { BagContext } from '../../App';
import { useContext } from "react";

export default function FavoriteProducts() {
    const { bagItems, setBagItems } = useContext(BagContext)

    const favoriteProductElements = bagItems.favoriteItems.map((item, index) => {
        return (
            <BagProductCard
                key={index}
                type="favoriteItem"
                name={item.name}
                manufacturer={item.manufacturer}
                description={item.description}
                price={item.price}
            />
        )
    })

    return (
        <div className="flex flex-col gap-2">
            {favoriteProductElements.length ? favoriteProductElements : <h1 className="text-2xl font-semibold">No items in favorites</h1>}
        </div>
    )
}