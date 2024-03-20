import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log("BodyRendered");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //    if(list.length === 0){
  //     return <Shimmer/>
  //    }
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return ( <h1>You are offline. Please Check your Internet </h1> )
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-5 bg-slate-100">
      <div className="filter flex justify-center">
        <div className="py-2"> 
        <input
          type="text"
          className="search-box border h-10"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        </div>
        
        <div className="py-2 px-2">
        <button className="bg-slate-400 font-medium p-2 rounded text-white"
          onClick={() => {
            filteredList = list.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            console.log(filteredList);
            setFilteredList(filteredList);
          }}
        >
          Search
        </button>
        </div>
        <div className="py-2 px-2">
        <button
          className="filter-btn bg-slate-400 font-medium p-2 rounded text-white"
          onClick={() => {
            filteredList = filteredList.filter((res) => res.info.avgRating > 4.4);
            setFilteredList(filteredList);
            console.log(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
        </div>
        
      </div>
      <div className="res-container flex flex-wrap">
        {filteredList.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" +restaurant.info.id}> <Restaurant  resData={restaurant} /></Link>
         
        ))}
        {/* //array.map((x) =>  x*2); */}
      </div>
    </div>
  );
};

export default Body;
