
import { useState } from "react";
import { Restruntentscard , Withpromoted } from "./Restrocard.jsx";
import {UseRestrocard} from "../Utils/UseRestrocard.jsx"
import {UseUserOnline} from "../Utils/UseOnlineEvent";
export const Body = () => {
  
   const [searchText, setSearchText] = useState("");
   const {SetFilterrestro,setRestaurants ,restaurants,Filterrestro} =UseRestrocard()
    const { OnlineStatus } = UseUserOnline();

     const Promotedcard = Withpromoted(Restruntentscard);


    if (!OnlineStatus) {
        console.log("Offline detected");
        return (
            <h1 className="Network">
                Connect your Network, or Check your Network connection!!
            </h1>
        );
    }

  
  if (!Filterrestro) {
    return <h1> Loding.....</h1>
  }

 
  

    
  return (
    <div className="body">
      <div className="Search">

        <input className="searchinput"
          placeholder="Find something delicious... 😋"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />

        <button className="input"
          onClick={() => {
            

            // very importance

            // filter out in my mean components
            const filterrestreo = restaurants.filter((res) =>

              // for user anything latter search render this card  , as use this 

              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            SetFilterrestro(filterrestreo);

              setSearchText("");
          }}
        >
          Search
        </button>

      
      </div>
  
      <button className="toprated-filter" onClick={() => {
        SetFilterrestro(restaurants.filter((res) => res.avgRating > 4.7))
      }}>
        Fresh & Finest</button>


      <div className="res-container">

        {/* imp section to access all card into the database....*/}

        {Filterrestro.map((res) => (
           
           // higher order rendering very imp section .....
           res.avgRating === 4.9  || res.avgRating === 4.6 ? (<Promotedcard key={res.id} {...res}/>) :(<Restruntentscard key={res.id} {...res} />)
          
        ))}
      </div>
    </div>
  );
};

