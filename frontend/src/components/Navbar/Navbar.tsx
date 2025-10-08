import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/—Pngtree—shopping logo design_6020234.png";
import img1 from "./../../assets/photo_2024-02-14_12-35-20.jpg";
import { useState } from "react";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "./../AuthContext";
import {
  faCartShopping,
  faHome,
  faTags,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar">
        <ul>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="links">
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <FontAwesomeIcon icon={faCartShopping} />
                Shop
              </Link>
            </li>
            <li>
              <Link to="/services">
                <FontAwesomeIcon icon={faTags} />
                Discounted items
              </Link>
            </li>
            <li>
              <Link to="/contactus">
                <FontAwesomeIcon icon={faContactCard} />
                Contact Us
              </Link>
            </li>

            {/* Burger Menu */}
            <div
              className="burger--menu cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <div
                className={`line--1 transform transition duration-300 ${
                  open ? "rotate-45 translate-y-1.25" : ""
                }`}
              ></div>
              <div
                className={`line--2 transform transition duration-300 ${
                  open ? "hidden" : ""
                }`}
              ></div>
              <div
                className={`line--3 transform transition duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </div>
          </div>

          {user ? (
            <li className="user--account  hidden">
              <Link className="account" to="/useraccount">
                <img
                  className=" bg-cover w-full h-full rounded-full"
                  src={img1}
                  alt=""
                />
              </Link>
              <h3>User Name</h3>
            </li>
          ) : (
            <div className="buttons">
              <button className="btn--signin">
                <Link to="/signin">Sign in</Link>
              </button>
              <button className="btn--signup">
                <Link to="/signup">Sign up</Link>
              </button>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
