import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () =>{
    // const[resInfo, setResInfo] = useState(null);
    // useEffect(() => {
    //     fetchMenu();
    // },[]);

   const {resId} = useParams();
   resInfo = useRestaurantMenu(resId);
   console.log(resId);
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL+resId)
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // }
    if(resInfo === null) return <Shimmer/>


    const{name, cuisines, costForTwoMessage, locality, areaName}  = resInfo?.cards[0]?.card?.card?.info;

    const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(itemCards);
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
    // const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.hasOwnProperty("title"))

    console.log(categories);
    return <div className="text-center">
        <h1 className="font-bold p-2 m-2 ">{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <p>{costForTwoMessage}</p>
        <p>{areaName}{" "}{locality}</p>
        {categories.map((category) => <RestaurantCategory data = {category}/> )}
    </div>

}

export default RestaurantMenu;