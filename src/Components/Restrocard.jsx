import { useDispatch } from "react-redux";
import {addItems} from "../Store/CartSlice"
import { Link } from "react-router-dom"
export const Restruntentscard = ({
  id,
  image,
  name,
  avgRating,
  deleveriytime,
  price,
  cuisines
  
}) => {

    //console.log(props)
  //dispatch a action 
const Dispatch = useDispatch();

const handelAdd =()=>{
      const carddata ={
  id,
  image,
  name,
  avgRating,
  deleveriytime,
  price,
  cuisines
      };
    Dispatch(addItems(carddata));
};


  return (

   
      <div className="res-card" key={id}>
       <Link to={`/viewproduct/card/${id}`} style={{ textDecoration: "none", color: "inherit" }} >
        <img className="foodimg" alt={name} src={image} />
  </Link>
        <div>
          <h3 className="shopDetails">{name}</h3>
          <h4 className="Details">{cuisines}</h4>
       
          <div className="ratings">

            <h4>{avgRating} ★</h4>
          </div>
       <div className="delivery-time">DeleveriyTime-{deleveriytime}</div>
          <h4>₹{price}</h4>
          
          <button className="Addcard" 
           // dispatch a action into the redux slice 
            onClick={handelAdd}
          >
            Add to cart
          </button>
        </div>
      </div>
      
  );
};

// higher order restrocard that show promoted restaurant
   export const Withpromoted = (Restruntentscard) =>{
        
    return ( props)=>{
            return (

               <div className="promoted-card">
                   <label className="promoted-label">promoted</label>
                    <Restruntentscard {...props}/>
               </div>
            );
    };

   }
