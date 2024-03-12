
import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body =  () =>{

    let [list, setList] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
   
        const fetchData = async () => { 
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // Optional Chaining
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    };
        
       
    
   if(list.length === 0){
    return <Shimmer/>
   }
    
   
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                    onClick={()=>{
                        list = list.filter(
                            (res)=> res.info.avgRating>4.4
                        );
                        setList(list);
                        console.log(list);
                    }}
        
                >
                    Top rated Restaurants</button>
                    

            </div>
        <div className="res-container"> 
       
       { list.map(restaurant => <Restaurant key={restaurant.info.id}  resData = {restaurant} />) }
        {/* //array.map((x) =>  x*2); */}
           
            
           
            </div>   
        </div>

    )
}

export default Body;