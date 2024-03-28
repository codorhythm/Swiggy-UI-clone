import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items, " itms ");
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.map((item) => (
        <div className="flex py-2 m-2" key={item.card.info.name}>
          <div className="w-9/12 text-left">
            <div className="font-semibold text-[#3e4152]">
              {item.card.info.name}
            </div>
            <div className="text-sm text-[#3e4152]">
              ₹{" "}
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </div>
            <div className="text-xs text-[#d4d5d9]">
              {item.card.info.description}
            </div>
          </div>
          <div className=" w-3/12">
            <div>
            <img
              className="w-[150px] h-[120px] object-cover rounded-md"
              src={CDN_URL + item.card.info.imageId}
              alt=""
            />
            </div>
            <div>
            <button className="bg-white text-[#3d9b6d] text-xs p-2 m-12 mt-[120px] border absolute font-bold rounded-md" onClick={() => handleAddItem(item)}>
              {" "}
              ADD +{" "}
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
