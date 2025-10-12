import "../style/ViewProduct.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export const ViewProduct = ({ }) => {
     const { id } = useParams();
     const [card, setCard] = useState(null);

     useEffect(() => {
          fetch(`https://dummyjson.com/recipes/${id}`)
               .then((res) => res.json())
               .then((data) => setCard(data));
     }, [id])

     console.log(card);

     if (!card) {
          return <h2>Loading...</h2>;
     }
     return (
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>

               <div className="Mainviewproduct ">

                    <div className="Viewproduct">

                         <div className="cardDetails" >
                              <div >
                                   <img src={card.image} alt="cardimg" className="imgview" />
                              </div>

                              <div className="items">

                                   <div className="itemsdetails">
                                        <div>
                                             <b>Item-Name:- {card.name} </b>
                                        </div>
                                        <div>
                                             <b>MealType:{card.mealType}  </b>
                                        </div>


                                        <p>{card.ingredients} </p>
                                        <br />
                                        <p>{card.instructions} </p>
                                   </div>

                                   <div className="cardreview">
                                        <div className="review">
                                             <h1>{card.rating} rating</h1>
                                        </div>
                                        <div className="review">
                                             <h1>
                                                  {card.reviewCount} review our items
                                             </h1>

                                        </div>

                                   </div>

                                   <div className="tag">
                                        <div className="tag1">
                                             #{card.tags[0]}
                                        </div>

                                        <div>
                                             #{card.tags[1]}
                                        </div>
                                        <div>
                                             #{card.tags[2]}
                                        </div>


                                   </div>
                              </div>


                         </div>

                    </div>
               </div>


          </Link>

     )


}