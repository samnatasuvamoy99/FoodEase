import { Cartcard } from "../Components/cartCard"
import { useSelector } from "react-redux";

export const Cartpages = () => {

  //subscribing the items
  const Totalcart = useSelector((store) => store.cart.items);

  // subscribing hole store??
    // const  store = useSelector((store)=>store);
    
  console.log(Totalcart);
  return (
         
    <div className="w-screen h-screen  bg-gray">
    
<div className=" flex flex-col">
        <div>
          <b> Cart</b>
        </div>
        <div>
          {Totalcart.length == 0 && <b>Please Add some Food</b>}
        </div>

      </div>

      {Totalcart.map((cartD) => (

        <div key={cartD.id} className="flex flex-col gap-2">

          <Cartcard  {...cartD} />

        </div>


      ))}

    </div>
  )

}