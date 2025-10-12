import "../style/About.css"
import { Link } from "react-router-dom";
import { user } from "../Components/UserDetails";
import { useState  , useContext} from "react";
import {UserContext} from "../Utils/Usercontext"
import { User } from "lucide-react";

const About = () => {

  const {loggedInUser } = useContext(UserContext)

  const [name, setName] = useState(user.name);

  const handleClick = () => {
    const newName = "Suvamoy Samanta";
    setName(newName);    // update local state
    user.name = newName; // update shared object for UserDetails
  };

  // In JSX



  // To update
  console.log("children components rendering successfully ")

  return (
    <div>
      {/* Header */}

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Fooddelevry</h2>
          <p>
            At Fooddelevry, we deliver delicious meals from your favorite restaurants directly to your doorstep.
            Our mission is to make food ordering easy, fast, and reliable. Whether you crave local delicacies or international cuisines,
            FoodExpress brings flavors to your home with just a few clicks.
          </p>
          <p>
            Founded in 2025, FoodExpress has grown rapidly by connecting food lovers with top-rated restaurants.
            Customer satisfaction, hygiene, and speedy delivery are at the heart of everything we do.
          </p>



        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team 

        {/* access the data context   */}
       <UserContext.Consumer>
         {({loggedInUser})=>(
            <h1>{loggedInUser}</h1>
         )}
       </UserContext.Consumer>
        </h2>
    
          <div className="team-cards">

            <Link to="/userdetails" style={{ textDecoration: "none" }}>
              <div className="card" onClick={handleClick}>
                <h3>suvamoy samanta  </h3>
                <p>Founder & CEO</p>

              </div>
            </Link>

  <Link to="/userdetails" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Maria Lopez</h3>
              <p>Chief Technology Officer</p>
            </div>
            </Link>
            <div className="card">
              <h3>samanta Babu</h3>
              <p>Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 FoodExpress. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
