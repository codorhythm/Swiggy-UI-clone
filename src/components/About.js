import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";
class About extends React.Component{
    constructor(props){
        super(props);
        }

    render(){
        return <div>
        <h1>About us</h1>
        <h2>Thi is a routed path to About us</h2>
        <UserContext.Consumer>
            {({loggedInUser}) => <h3>{loggedInUser}</h3>}
        </UserContext.Consumer>
        <UserClass name={"First"} loacation={"Blr"} />
        </div>

    }

}
// const About = () => {
//     return <div>
//         <h1>About us</h1>
//         <h2>Thi is a routed path to About us</h2>
//         <UserClass name={"Pratulya"} location={"Benaluru"} contact = {"@pratulya"} />
//     </div>
// }

export default About;