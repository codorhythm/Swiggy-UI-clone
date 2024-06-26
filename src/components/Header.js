import { useContext, useState } from "react";
import { CART_ICON, LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnNmae] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);
  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);
  return (
    <div className="header flex justify-around p-4 ">
      <div className="logo">{LOGO}</div>
      <div className="nav-items">
        <ul className="flex pt-2 text-[#3e4152]">
          <li className="px-2">
            Online Status : {onlineStatus ? " ✅ " : " 🔴 "}
          </li>
          <li className="px-2 font-semibold">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="px-2 font-semibold">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-2 font-semibold">
            <Link to={"/contactus"}>Contact Us</Link>
          </li>
          <li className="px-2 font-semibold">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-2 font-semibold">
            <Link to={"/cart"}>
              {" "}
              <div className="flex items-center">
                <span className="relative">
                  {CART_ICON}{" "}
                  <span className="absolute top-0 right-0 left-[1px] px-1 text-sm font-bold">
                    {cartItem.length}{" "}
                  </span>
                </span>{" "}
                <span className="ml-2">Cart</span>{" "}
              </div>
            </Link>
          </li>
          <li className="px-2">
            <button
              className="login bg-orange-600  font-medium text-white px-2 rounded-md "
              onClick={() => {
                btnName === "Login"
                  ? setBtnNmae("Logout")
                  : setBtnNmae("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
