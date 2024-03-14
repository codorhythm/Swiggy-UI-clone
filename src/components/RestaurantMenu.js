import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () =>{
    const[resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);

   const {resId} = useParams();
   console.log(resId);
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId)
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    if(resInfo === null) return <Shimmer/>


    const{name, cuisines, costForTwoMessage
    }  = resInfo?.cards[0]?.card?.card?.info;

    const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards);
    return <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <h3><ul>
            {itemCards.map( item => <li> {item.card.info.name} {" Rs."} {item.card.info.price/100} </li> )}
            {/* <li>{itemCards[0].card.info.name}  </li> */}
            </ul></h3>
    </div>

}

export default RestaurantMenu;