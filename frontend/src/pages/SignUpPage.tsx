import img from "./../assets/bg.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
const SingUpPage = () => {
  return (
    <div className="h-dvh w-dvw  bg-gradient-to-bl from-blue-600 to-blue-300 flex items-center  justify-center">
      <img
        className=" absolute w-full h-full object-cover -z-0"
        src={img}
        alt="bg-img"
      />
      <div className="w-2/3 h-18/24 z-1 bg-gray-100/30 backdrop-blur-xs">
        <div className="h-11/12 w-full flex">
          <div className="w-5/12  h-6/6 p-5">
            <h1 className="h-1/12 text-4xl text-green-400 font-bold">
              Sign up
            </h1>
            <p className="w-full text-white p-5 h-1/12">
              Don't have an account ?{" "}
              <Link className="text-blue-400 underline" to="signin">
                Create now
              </Link>
            </p>
            <form
              className="w-full h-10/12  flex flex-col p-5 gap-2"
              action="post"
              method="post"
            >
              <label className=" text-white text-md" htmlFor="username">
                User Name :
              </label>
              <input
                className="w-10/12 bg-white h-9 outline-0 px-5 self-center py-1 shadow-lg shadow-neutral-500"
                name="username"
                type="text"
                placeholder="UserName..."
              />
              <label className=" text-white text-md" htmlFor="password">
                Password :
              </label>
              <input
                className="w-10/12 bg-white h-9 outline-0 px-5 self-center py-1 shadow-lg shadow-neutral-500"
                name="password"
                type="password"
                placeholder="Password..."
              />
              <label className=" text-white text-md" htmlFor="password">
                Password validatation :
              </label>
              <input
                className="w-10/12 bg-white h-9 outline-0 px-5 self-center py-1 shadow-lg shadow-neutral-500"
                name="password"
                type="password"
                placeholder="Password..."
              />
              <div className="w-full flex items-center gap-2">
                <label className="text-white" htmlFor="remember">
                  remember me
                </label>
                <input
                  className="bg-white w-4 h-4 outline-0"
                  name="remember"
                  type="checkbox"
                />
              </div>
              <Link className=" underline self-end text-green-500" to="">
                Forget password?
              </Link>
              <button
                className=" bg-neutral-800 text-white w-10/12 self-center h-10"
                type="submit"
              >
                Sign up
              </button>
              <p className=" text-white self-center   w-full text-center border-b-2">
                or
              </p>
              <button className="bg-neutral-800 text-white w-10/12 self-center h-11 ">
                Continue with Google <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button className="bg-neutral-800 text-white w-10/12 self-center h-11 ">
                Continue with facebook <FontAwesomeIcon icon={faFacebook} />
              </button>
            </form>
          </div>
          <div className="w-1/2 h-full"></div>
        </div>
      </div>
    </div>
  );
};
export default SingUpPage;
