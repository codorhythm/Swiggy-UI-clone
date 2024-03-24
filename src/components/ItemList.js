import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items, " itms ");
  return (
    <div className="flex py-2 m-2"> 
      <div className="w-9/12 text-left">
        <div className="font-semibold text-[#3e4152]">{items.card.info.name}</div>
        <div className="text-sm text-[#3e4152]">
          ₹{" "}
          {items.card.info.defaultPrice
            ? items.card.info.defaultPrice / 100
            : items.card.info.price / 100}
        </div>
        <div className="text-xs text-[#d4d5d9]">
          {items.card.info.description}
        </div>
      </div>
      <div className=" w-3/12">
        <img className="w-[150px] h-[120px] object-cover rounded-md" src={CDN_URL + items.card.info.imageId} alt="" />
      </div>
    </div>
  );
};

export default ItemList;
