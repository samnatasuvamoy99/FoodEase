
export const Cartcard = ({
  id,
  image,
  name,
  avgRating,
  price,

}) => {
  return (
    <div className="w-3/4 h-32 shadow-lg rounded-md bg-red-200 mt-4 justify-center">
      <div className="flex justify-between" key={id}>
        <div className=" font-mono grid-cols-3  pt-5">
          <div>
            <h1>Name-/{name}</h1>
          </div>
          
          <div>
            <h1>avgRating-{avgRating}</h1>
          </div>
          <div>
            <b>Price-{price}</b>
          </div>
        </div>
          <div >
              <img src={image}  alt="cartcard" className="w-32 h-24"/> 
              <button>
                 Add
              </button>
          </div>

          
      </div>

    </div>
  )
}