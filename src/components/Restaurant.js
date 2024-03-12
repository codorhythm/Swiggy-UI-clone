import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
       
        <div className="rest-card"  style={{backgroundColor:"#f0f0f0"}}>
        
        <img className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} alt="" srcset="" />
        
        <div className="rest-name">
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{costForTwo}</h3>
            <h3>{sla.deliveryTime} mins</h3>
        </div>
        
        </div>
        
    )
}

export default Restaurant;