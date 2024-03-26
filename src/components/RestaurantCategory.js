import { useState } from "react";
import { DOWN_ARROW, UP_ARROW } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems, setShowIndex}) => {
  // console.log(data.card.card.itemCards, " ", data.card.card.itemCards.length);
//   const items = data.card.card.itemCards;
//   console.log(showItems," shows");
//   const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // setShowItems(!showItems)
    // console.log("clicked");
    // console.log(showItems);
    setShowIndex();
  };
  return (
    <div>
    <div className=" w-[6/12] mx-[307] py-2" >
      <div className="flex justify-between py-2 cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-xl text-[#282c3f] ">
          {data.card.card.title} ({data.card.card.itemCards.length})
        </span>{" "}
        <span> { showItems? UP_ARROW : DOWN_ARROW}</span>
      </div>
      
        {/* {data.card.} */}
        {/* {items.map((it , index) => (
          setShowIndex(index) && showItems && <ItemList items={it}  />
        ))} */}
       
        {showItems && <ItemList items={data.card.card.itemCards}/>}
    
    
        </div>
    </div>
  );
};

export default RestaurantCategory;
