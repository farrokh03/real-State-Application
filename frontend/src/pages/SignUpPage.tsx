import img from "./../assets/bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
const SingUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/users/", {
        username: formData.username,
        password: formData.password,
      });
      navigate("/");
      setFormData({ username: "", password: "" });
    } catch (error) {
      navigate("/*");
      console.log("error submitting form:", error);
    }
  };

  return (
    <div className="h-dvh w-dvw  bg-gradient-to-bl from-blue-600 to-blue-300 flex items-center  justify-center">
      <img
        className=" absolute w-full h-full object-cover -z-0"
        src={img}
        alt="bg-img"
      />
      <div className="w-2/3 h-18/24 z-1  backdrop-blur-xs">
        <div className="h-12/12 w-full flex">
          <div className="w-5/12  h-full p-5">
            <h1 className="h-1/12 text-4xl text-green-400 font-bold">
              Sign up
            </h1>

            <form
              onSubmit={handleSubmit}
              className="w-full h-12/12  flex flex-col p-5 gap-2"
              action="post"
              method="post"
            >
              <label className=" text-white text-md" htmlFor="username">
                User Name :
              </label>
              <input
                onChange={handleChange}
                className="w-10/12 bg-white h-9 outline-0 px-5 self-center py-1 shadow-lg shadow-neutral-500  border border-gray-300  outline-none transition-all duration-300
             focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.5)]
             hover:border-blue-400"
                name="username"
                type="text"
                placeholder="Username..."
                value={formData.username}
                autoComplete="off"
              />
              <label className=" text-white text-md" htmlFor="password">
                Password :
              </label>
              <input
                onChange={handleChange}
                className="w-10/12 bg-white h-9 outline-0 px-5 self-center py-1 shadow-lg shadow-neutral-500  border border-gray-300  outline-none transition-all duration-300
             focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.5)]
             hover:border-blue-400"
                name="password"
                type="password"
                placeholder="Password..."
                value={formData.password}
                autoComplete="off"
              />
              <label className=" text-white text-md" htmlFor="password">
                Password validatation :
              </label>
              <input
                onChange={handleChange}
                className="w-10/12 bg-white h-9 outline-0 px-5 self-center py-1 shadow-lg shadow-neutral-500  border border-gray-300 outline-none transition-all duration-300
             focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.5)]
             hover:border-blue-400"
                name="password"
                type="password"
                placeholder="Password..."
                autoComplete="off"
              />

              <button
                className=" bg-neutral-800 hover:bg-neutral-600 hover:text-blue-500 text-white w-10/12 self-center h-10 mt-5"
                type="submit"
              >
                Sign up
              </button>
              <p className=" text-white self-center p-5 h-1/12">
                You have an account ?{"  "}
                <Link
                  to="/signin"
                  className="text-green-400 underline decoration-0 decoration-emerald-200 underline-offset-6"
                >
                  Sign in now
                </Link>
              </p>

              <p className=" text-white self-center   w-full text-center border-b-2">
                or
              </p>
              <button className="bg-neutral-800 hover:text-green-500 transition-all hover:bg-neutral-600 text-white w-10/12 self-center h-11 mt-5 ">
                Continue with Google <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button className="bg-neutral-800 hover:text-blue-500 transition-all hover:bg-neutral-600 text-white w-10/12 self-center h-11 ">
                Continue with facebook <FontAwesomeIcon icon={faFacebook} />
              </button>
            </form>
          </div>
          <div className="w-7/12 bg-white h-full p-15">
            <Link to="/" className="absolute top-5 right-5 cursor-pointer">
              <FontAwesomeIcon
                className=" text-xl"
                icon={faArrowUpRightFromSquare}
              />
            </Link>
            <h1 className="text-4xl font-bold ">Create Your Free Account</h1>
            <p className="p-15 text-justify text-green-700 text-lg">
              Sign up for [Your Brand Name] to access exclusive features,
              personalized content, and a secure dashboard. Fast, free, and easy
              registration—join us today!
            </p>
            <p className="text-lg  p-10 bg-green-600/80 shadow-lg shadow-gray-300 rounded-br-3xl rounded-tl-3xl">
              Why Join [Your Brand Name]? Unlock all the benefits of our
              platform. By creating your free account, you can:
              {"   "}
              <div className="w-12/12 flex flex-wrap px-10">
                <li className="text-rose-500">
                  Save your favorite items or projects.
                </li>
                {"   "}
                <li className="text-rose-500">
                  Track your progress and activity.{"   "}
                </li>
                <li className="text-rose-500">
                  Get exclusive deals and personalized recommendations.
                </li>
                {"   "}
                <li className="text-rose-500">
                  Enjoy a secure and private experience.
                </li>
              </div>
              Creating an account takes less than a minute!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingUpPage;
