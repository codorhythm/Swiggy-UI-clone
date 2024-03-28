import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems," C A R T");

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center  m-4 p-4">
            <div className="flex justify-between w-6/12 m-auto">
            <h1 className="text-2xl font-bold text-[#3e4152]">Cart Items</h1>
            <button className="m-2 p-2 rounded-md text-white font-bold bg-[#3d9b6d]" onClick={handleClearCart}>Clear Cart</button>
            </div>
            {cartItems.length === 0 && <h1 className="font-bold text-xl">Cart is Empty</h1> }
            <div className="w-6/12 m-auto">
                
            <ItemList items = {cartItems}/>
            </div>
            
        </div>
        
    )
}

export default Cart;