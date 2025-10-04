// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignInAlt, faSignIn } from "@fortawesome/fzree-solid-svg-icons";
import { Link } from "react-router-dom";
import img1 from "./../../assets/shop.jpg";
const InviteSection = () => {
  return (
    <div className="w-7/12 h-150  backdrop-blur-2xl W shadow-md  shadow-gray-500 bg-neutral-800 flex items-center">
      <div className="w-8/12 h-full p-20 flex flex-col justify-around">
        <h1 className="text-3xl text-blue-500 rounded-xl p-2 ">
          Unlock Member-Only Benefits. <br />
          Your Shopping Journey Starts Here.
        </h1>
        <p className="text-lg text-white bg-neutral-500  text- p-10 rounded-xl shadow-xl shadow-neutral-700">
          🛍️ Sign up today and make your shopping experience even better! By
          creating an account, you’ll get access to exclusive deals, early
          access to new arrivals, faster checkout, and special offers just for
          our members. It’s quick, free, and the best way to stay connected with
          everything we have in store. Don’t wait—join now and start enjoying
          the perks!
          <Link className="text-blue-300" to="/signup">
            click here to create a new account!
          </Link>
        </p>
      </div>
      <img
        className="w-1/3 h-full  opacity-50 shadow-xl shadow-gray-600"
        src={img1}
        alt="img1"
      />
    </div>
  );
};
export default InviteSection;
