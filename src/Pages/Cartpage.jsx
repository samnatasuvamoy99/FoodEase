import {Cartcard} from "../Components/cartCard"
import { useSelector } from "react-redux";

export const Cartpages = ()=>{
      
const Totalcart = useSelector((store) => store.cart.items);
        
      
  console.log( Totalcart )
      return(
             <div className="w-screen h-screen bg-gray">
                    {Totalcart.map((cartD)=>(

                  <div className="flex flex-col gap-1">

                    <Cartcard  key={cartD.id} {...cartD} />
              
                    </div>
         

                    ))}
       
       </div>
      )
      
}