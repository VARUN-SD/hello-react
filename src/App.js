import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";

 const Grocery=lazy(()=>import("./components/Grocery")); //lazy loading=dynamic loading/import=chunking=code splitting=dynamic bundling
 const About=lazy(()=>import("./components/About"));
const AppLayout=()=>{
    return (
        <div className="App">
        <UserContext.Provider value={{loggedInUser : "Dara Varun"}}>
          <Header/>
          <Outlet/>
        </UserContext.Provider>
        </div>
    )
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
             {
                path:"/about",
                element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<div>Loading....</div>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
]);


const root=ReactDOM.createRoot(document.getElementById("start"));
root.render(<RouterProvider router={appRouter}/>);
  