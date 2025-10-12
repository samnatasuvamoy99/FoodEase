import { useState , useEffect } from "react";

export const UseRestrocard=() =>{
  const [restaurants, setRestaurants] = useState([]);
  // searching is good we use this method for and 
  const [Filterrestro, SetFilterrestro] = useState([]);
 
  useEffect(() => {
      const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        const mapped = data.recipes.map((resData) => ({
          id: resData.id,
          image: resData.image,
          name: resData.name,
          avgRating: resData.rating,
          deleveriytime:
            resData.prepTimeMinutes + resData.cookTimeMinutes + " min",
          cuisines: resData.cuisine,
          price: Math.floor(Math.random() * 500) + 100, // fake price
        }));

        setRestaurants(mapped);
        SetFilterrestro(mapped);

        console.log("Fetched data:", mapped);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { SetFilterrestro, setRestaurants, restaurants, Filterrestro };

}