import { DOWN_ARROW } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    // console.log(data.card.card.itemCards, " ", data.card.card.itemCards.length);
    const items = data.card.card.itemCards;
    return (
        <div className=" w-[6/12] mx-[307] py-2">
            <div className="flex justify-between py-2">
            <span className="font-bold text-xl text-[#282c3f]">{data.card.card.title}  ({data.card.card.itemCards.length})</span> <span>{DOWN_ARROW}</span>
            </div>
            <div>
                {/* {data.card.} */}
                {items.map(it => (<ItemList items = {it}/>))}
            </div>
            
        </div>
    )
}

export default RestaurantCategory;