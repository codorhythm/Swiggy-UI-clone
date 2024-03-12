import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () =>{
    return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);



// const jHaeding = React.createElement("h1",
// {id:"heading"},
// "Namste React");

// //React Functional Component
// const Head1 = () => {
//     return <h1>Namaste Functional component</h1>
// }
 
// const Head3 = () => (
//     <div id="container">
//         <Head1/>
//         <h1 className="heading">Namste Functinal component</h1>
//     </div>
// )

// const jsxHeading = <h1 id="heading">Namaste React jsx</h1>
// console.log(jHaeding);   //same
// console.log(jsxHeading);  //same
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
// root.render(<Head3/>);







// {/* <div id="parent">
//     <div id="child">
//         <h1>I am h1</h1>
//         <h2>I am h2</h2>
//     </div>
//     <div id="child">
//         <h1>I am h1</h1>
//         <h2>I am h2</h2>
//     </div>
// </div> */}

// const parent = React.createElement("div", {id:"parent"},
//               [ React.createElement("div", {id:"child1"},
//               [React.createElement("h1", {}, "i am h1"),React.createElement("h2", {}, "I am h2")]
//               ),
//               React.createElement("div", {id:"child2"},
//               [React.createElement("h1", {}, "i am h1"),React.createElement("h2", {}, "I am h2")]
//               )]
// )


// {/* <div id="parent">
//     <div id="child">
//         <h1>I am h1</h1>
//         <h2>I am h2</h2>
//     </div>
// </div> */}
// // const parent = React.createElement("div", {id:"parent"},
// //                React.createElement("div", {id:"child"},
// //                [React.createElement("h1", {}, "i am h1"),React.createElement("h2", {}, "I am h2")]
// //                )
// // )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// {/* <div id="parent">
//     <div id="child">
//         <h1>I am h1</h1>
//     </div>
// </div> */}

// // const parent = React.createElement("div", {id:"parent"}, 
// //                React.createElement("div", {id:"child"},
// //                React.createElement("h1",{},"I am h1")
// //                )
// // )

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(parent);




// // const heading = React.createElement("h1", { id:"heading" }, "Hello World from React!");
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);