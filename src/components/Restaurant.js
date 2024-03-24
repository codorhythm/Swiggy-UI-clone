import { CDN_URL, RATING } from "../utils/constants";

const Restaurant = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, sla, locality} = resData?.info;
    return (
       
          <div className="m-4  w-[250px] h-[400px] hover:scale-90 transition duration-100 ease-in object-cover" >
        
        <img className="res-logo w-[280px] h-[180px] rounded-lg relative" src={CDN_URL+resData.info.cloudinaryImageId} alt="" />
        
        <div className="rest-name">
            <h2 className=" font-semibold pt-2 text-slate-800 text-lg" >{name}</h2>
            <span className="pb-2 flex  items-center font-semibold text-lg text-slate-800 "> {RATING}   {avgRating} • {" "}{sla.deliveryTime} mins</span>
            <h3 className=" text-slate-500 ">{cuisines.join(", ")}</h3>
            <h3 className=" text-slate-500 ">{costForTwo}</h3>
            <h3 className=" text-slate-500 ">{locality}</h3>
        </div>
        
        </div>
       
      
        
    )
}

export const withPromotedlabel = (Restaurant) => {
    
    return (props) => {
        const {resData} = props;
        // console.log(resData.info.aggregatedDiscountInfoV3);
        return (
            <div> 
                <div className="absolute z-10 ">
                <h1 className=" font-bold bg-gray-800 bg-opacity-95 text-white  m-2 p-2  rounded-md">{resData.info.aggregatedDiscountInfoV3.header} {resData.info.aggregatedDiscountInfoV3.subHeader}</h1>
                </div>
                
                <Restaurant {...props}/>
            </div>
        )
    }
}

export default Restaurant;