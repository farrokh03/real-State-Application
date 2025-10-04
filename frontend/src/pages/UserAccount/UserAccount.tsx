import {
  faBasketShopping,
  faGear,
  faBell,
  faSignOut,
  faEdit,
  faHistory,
  faList,
  faWallet,
  faArrowUpRightFromSquare,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserAccount.css";

import profilePhoto from "./../../assets/photo_2024-02-14_12-35-20.jpg";

const UserAccountPage = () => {
  return (
    <>
      {/* <img className="w-lvw h-lvh" src={} alt="" /> */}
      <div className="w-lvw h-lvh bg-gray-200 flex items-center justify-around">
        <div className="w-11/12 h-10/12 rounded-2xl shadow-2xl shadow-gray-500 flex flex-col flex-wrap items-center justify-around backdrop-blur-3xl p-5">
          <Link to="/">
            <FontAwesomeIcon
              className=" absolute right-2 top-2 text-xl text-neutral-700 cursor-pointer"
              icon={faArrowUpRightFromSquare}
            />
          </Link>
          <div className="container">
            <Outlet />
          </div>

          <ul className="useracc--options ">
            <div className="profile--informations">
              <Link to="/useraccount">
                <img src={profilePhoto} alt="user" />
              </Link>
              <h3>farrokh_03</h3>
              <p>last online two days ago</p>
            </div>
            <li>
              <Link to="/useraccount/editprof">
                <FontAwesomeIcon icon={faEdit} /> Edit Profile
              </Link>
            </li>
            <li>
              <Link to="/useraccount/userwallet">
                <FontAwesomeIcon icon={faWallet} /> My Wallet
              </Link>
            </li>
            <li>
              <Link to="/useraccount/userhistory">
                <FontAwesomeIcon icon={faHistory} />
                History
              </Link>
            </li>
            <li>
              <Link to="/useraccount/shoppingbasket">
                <FontAwesomeIcon icon={faBasketShopping} />
                Basket
              </Link>
            </li>
            <li>
              <Link to="/useraccount/usernotifications">
                <FontAwesomeIcon icon={faBell} />
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/useraccount/userwishlist">
                <FontAwesomeIcon icon={faList} />
                wishlist
              </Link>
            </li>
            <li>
              <Link to="/useraccount/usercomments">
                <FontAwesomeIcon icon={faComment} />
                Comments and questions
              </Link>
            </li>
            <li>
              <Link to="/useraccount/profilesettinge">
                <FontAwesomeIcon icon={faGear} />
                Settinge
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faSignOut} />
              Log out
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default UserAccountPage;
