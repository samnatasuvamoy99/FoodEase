import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";
import { UseUserOnline } from "../Utils/UseOnlineEvent"
import { UserContext } from "../Utils/Usercontext"
import { useSelector } from "react-redux";

export const Header = () => {
    const [btLogin, SetLogin] = useState("Login");
    const { OnlineStatus } = UseUserOnline();
    const { loggedInUser } = useContext(UserContext);
    const Totalcart = useSelector((store) => store.cart.items);

    return (
        <header className="header">
            <div className="Logodv">
                <Link to="/">
                    <img src="https://imgs.search.brave.com/FwS6zgoDlHymOLozVmU0bVBc8pEReirYhRNSJIrup10/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM5LzYzLzc4/LzM2MF9GXzIzOTYz/Nzg3Ml8yeUttWENS/OUdZOXlXeHp0eFNj/NUFBSTRiQld3YlFs/VC5qcGc" alt="Logo" className="LogoOrginal" />
                </Link>
            </div>

            <nav className="av-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                    <li>
                        <Link to="/cartpage" className="cart-link">
                            Cart <span className="cart-badge">{Totalcart.length}</span>
                        </Link>
                    </li>
                    <li className="login-btn" onClick={() => {
                        btLogin === "Login" ? SetLogin("Logout") : SetLogin("Login");
                    }}>
                        {btLogin} {loggedInUser && <span className="loginusername">({loggedInUser})</span>}
                    </li>
                </ul>

                <div className="status-indicator">
                    {OnlineStatus ? (
                        <div className="status online"><CheckCircle size={18} /> Online</div>
                    ) : (
                        <div className="status offline"><XCircle size={18} /> Offline</div>
                    )}
                </div>
            </nav>
        </header>
    );
};