import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
       this.state = {
            userinfo:{
                name :"dummy",
                location:"default",
                avatar_url:"hhrp"
            }
       }
  
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/codorhythm")
        const json = await data.json();
        console.log(json);
        this.setState({
            userinfo : json
        })
        console.log("Moutnted")
    }

    componentDidUpdate(){
        console.log("Updated")
    }

    componentWillUnmount(){
        console.log("Unmounted")
    }
    
    render(){
        const {name , avatar_url, location} = this?.state?.userinfo 
        debugger;
        return (<div className="user">
          
            <h1><img src={avatar_url} alt="" srcset="" /></h1>
            <h1>Name : {name}</h1>
            <h2>Location: {location}</h2>
            <h2>Contact  : @pratulya </h2>
        </div>)
    }
}

export default UserClass