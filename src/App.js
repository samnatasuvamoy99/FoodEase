import React, { useEffect, useState, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./Pages/About.js";
import ContactUs from "./Pages/Contacts.js"
import { UserDetails } from "./Components/UserDetails";
import { UserContext } from "./Utils/Usercontext.jsx"
import { ViewProduct } from "./Components/Viewproduct.jsx"
import { SpecificFood } from "./Pages/Placefood.jsx"
import { Provider } from "react-redux"
import { AppStore} from "./Store/Appstore.js"
import {Cartpages} from "./Pages/Cartpage.jsx"
import {Cartcard} from "./Components/cartCard.jsx"

// very importance section this is, does not render when open the website , until click this section 
const About = lazy(() => import("./Pages/About.js"))

function App() {

  // to use context in  my app
  const [userName, SetuserName] = useState();

  // authentication or when you call your backend that data ,,,,,,
  useEffect(() => {
    const data = {
      name: "suvamoy",
    };
    SetuserName(data.name);


  }, []);

  return (
     
    <Provider store={AppStore}>
       <UserContext.Provider value={{ loggedInUser: userName }} >
      <div className="app">

        <Header />

        {/*** conditional rendering  which children you have,  this is the method of children rendering into the root  */}
        <Outlet />

      </div>
    </UserContext.Provider>
    </Provider>
   

  );
}


const appRoute = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />

      },
      {
        path: "/",
        element: <Body />

      }
      , {
        path: "/contacts",
        element: <ContactUs />
      }
      , {
        path: "/userdetails",
        element: <UserDetails />
      }, {
        path: "/viewproduct/card/:id",
        element: <ViewProduct />
      }
      , {
        path: "/specificRestaurant",
        element: <SpecificFood />
      },
      {
         path:"/cartpage",
         element :<Cartpages/>
      }
      ,
      {
         path:"/cartcard",
         element:<Cartcard/>
      }
    ]
  }

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
  </React.StrictMode>
);