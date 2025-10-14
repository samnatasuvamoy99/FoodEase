
export const Cartcard = ({
  id,
  image,
  name,
  avgRating,
  price,

}) => {
  return (
    <div className="w-3/4 h-32 shadow-lg rounded-md  mt-4 justify-center border-1 ml-14 hover:shadow-xl border-gray-950  ">
    
      <div className="flex justify-between" key={id}>
        <div className=" font-mono grid-cols-3  text-wrap pt-5 text-center  border-r-emerald-200 shadow-sm ml-12 text-gray-700">
          <div className=" font-weight: 200 700 text:solid">
            <h1>{name}</h1>
          </div>
          
          <div>
            <h1>AvgRating-{avgRating}</h1>
          </div>
          <div >
            <b>Price-{price}</b>
          </div>
        </div>
          <div >
              <img src={image}  alt="cartcard" className="w-32 h-24 rounded-xl p-1"/> 
              <button className="w=2/6 bg-red-600 text-white rounded shadow-md ml-8">
                 Remove
              </button>
          </div>

          
      </div>

    </div>
  )
}