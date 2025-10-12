import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";
import { UseUserOnline } from "../Utils/UseOnlineEvent"
import { UserContext } from "../Utils/Usercontext"
import { useSelector } from "react-redux";
export const Header = () => {


    const [btLogin, SetLogin] = useState("Login");

    const { OnlineStatus } = UseUserOnline();

    // use Usercontext  where you store your value...
    const { loggedInUser } = useContext(UserContext);

    //subscribing to the store all state using a selector...
    const Totalcart = useSelector((store) => store.cart.items);

    console.log(Totalcart);


    // dependency array is a method when a particular components is changing that time it was rerender that components,,,,,,,

    // concepts is given  note 

    useEffect(() => {
        console.log("hi suvamoy how are you !! ?");

    }, [btLogin])


    return (
        <div className="header">

            <div className="Logodv">
                <img src="https://imgs.search.brave.com/FwS6zgoDlHymOLozVmU0bVBc8pEReirYhRNSJIrup10/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM5LzYzLzc4/LzM2MF9GXzIzOTYz/Nzg3Ml8yeUttWENS/OUdZOXlXeHp0eFNj/NUFBSTRiQld3YlFs/VC5qcGc" alt="Logo" className="LogoOrginal" />
            </div>

            <div className="av-items">
                <ul className="av-items">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="contacts">Contact us</Link>
                    </li>

                    <li>
                        <Link to="/cartpage" >
                            Cart-[{Totalcart.length}]items

                        </Link>
                    </li>

                    <li className="login" onClick={() => {
                        btLogin === "Login" ? SetLogin("Logout") : SetLogin("Login");
                    }}>{btLogin}<p className="loginusername">{loggedInUser} </p>
                    </li>




                </ul>

                {/* online checkup......... */}
                <div style={{
                    display: "flex",

                    gap: "3px",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: OnlineStatus ? "green" : "red",
                    justifyContent: "end",
                    marginTop: "8px",
                    marginRight: "3px"
                }}>
                    {OnlineStatus ? (
                        <>
                            <CheckCircle size={22} /> Online
                        </>
                    ) : (
                        <>
                            <XCircle size={22} /> Offline
                        </>
                    )}
                </div>

            </div>


        </div>
    );

};