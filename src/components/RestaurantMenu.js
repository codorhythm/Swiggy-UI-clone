import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { GREEN_STAR } from "../utils/constants";
import { useState } from "react";
const RestaurantMenu = () => {
  // const[resInfo, setResInfo] = useState(null);
  // useEffect(() => {
  //     fetchMenu();
  // },[]);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  console.log(resId);
  console.log(resInfo)
  console.log(resInfo?.cards[2]?.card?.card?.info.name);
  // const fetchMenu = async () => {
  //     const data = await fetch(MENU_URL+resId)
  //     const json = await data.json();
  //     console.log(json);
  //     setResInfo(json.data);
  // }
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    areaName,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info; 

//   const { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//     console.log(resInfo)
  // console.log(itemCards);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.hasOwnProperty("title"))

  console.log(categories);
  return (
    <div className="text-left ">
      <div className="flex w-[725px] justify-between items-center ml-[307px]">
        <div>
          <h1 className="font-bold py-2 my-2 text-[#282c3f] text-2xl ">
            {name}
          </h1>
          <div className="text-sm text-[#7e808c]">
            <h3>{cuisines.join(", ")}</h3>
            <p>{costForTwoMessage}</p>
            <p>
              {areaName} {locality}
            </p>
          </div>
        </div>
        <div className="flex flex-col border border-gray-300 outline  outline-gray-200 p-2 max-w-24 float-right text-center rounded-md">
          <span className="text-[#3d9b6d] pb-[10px] border-b-[1px] font-bold flex items-center pl-2">
            {GREEN_STAR} {avgRatingString}
          </span>
          <span className="text-[11px] font-bold text-[#8b8d97]">
            {totalRatingsString}
          </span>
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
