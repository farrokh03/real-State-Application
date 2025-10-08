import img from "./../assets/bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://127.0.0.1:8000/api/token", { username, password })
        .then((Response) => {
          const token = Response.data.access;
          localStorage.setItem("token", token);
          const userData = { username, token };
          login(userData);
          navigate("/");
        });
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  useEffect(() => {
    document.title = "Sign In | [Your Brand Name]";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Sign in to your [Your Brand Name] account to access personalized features, track activity, and manage your dashboard securely."
      );
  }, []);

  return (
    <div className="h-dvh w-dvw bg-gradient-to-bl from-blue-600 to-blue-300 flex items-center justify-center relative">
      <img
        className="absolute w-full h-full object-cover -z-0"
        src={img}
        alt="background for sign in page"
      />
      <div className="w-2/3 h-18/24 z-1 backdrop-blur-xs">
        <div className="h-full w-full flex">
          {/* Left Section (Info) */}
          <div className="w-7/12 bg-white h-full p-15">
            <Link to="/" className="absolute top-5 right-5 cursor-pointer">
              <FontAwesomeIcon
                className="text-xl"
                icon={faArrowUpRightFromSquare}
                title="Go to homepage"
              />
            </Link>

            <h1 className="text-4xl font-bold text-blue-600">Welcome Back!</h1>
            <p className="p-15 text-justify text-gray-700 ">
              Sign in to your <strong>[Your Brand Name]</strong> account to
              continue where you left off. Access your dashboard, view saved
              content, and enjoy a smooth, personalized experience every time
              you log in.
            </p>

            <p className="text-lg p-10 bg-blue-600/80 shadow-lg shadow-gray-300 rounded-br-3xl rounded-tl-3xl text-white">
              Why Sign In?
              <ul className="w-full flex flex-col px-10">
                <li>Access personalized recommendations.</li>
                <li>Manage your saved projects and items.</li>
                <li>Track your progress and history.</li>
                <li>Enjoy a faster and more secure experience.</li>
              </ul>
              Logging in is quick, easy, and completely secure!
            </p>
          </div>

          {/* Right Section (Form) */}
          <div className="w-5/12 h-full p-5">
            <h1 className="h-1/12 text-4xl text-white font-bold mb-3">
              Sign In
            </h1>
            <p className="w-full text-white p-5 h-1/12">
              Don’t have an account?{" "}
              <Link className="text-green-400 underline" to="/signup">
                Create one now!
              </Link>
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full h-12/12 flex flex-col p-5 gap-2"
              aria-label="Sign in form"
              method="post"
              action="post"
            >
              <label className="text-white text-md" htmlFor="username">
                Username or Email
              </label>
              <input
                onChange={handleChange}
                className="w-10/12 bg-white h-9 outline-0 px-5 self-center py-1 shadow-lg shadow-neutral-500 border border-gray-300 outline-none transition-all duration-300
             focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.5)]
             hover:border-blue-400"
                name="username"
                type="text"
                placeholder="Enter your username or email"
                value={formData.username}
                required
              />

              <label className="text-white text-md" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleChange}
                className="w-10/12 bg-white h-9 outline-0 px-5 self-center py-1 shadow-lg shadow-neutral-500 border border-gray-300 outline-none transition-all duration-300
             focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.5)]
             hover:border-blue-400"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                required
              />

              <div className="w-full flex items-center gap-2">
                <input
                  className="bg-white w-4 h-4 outline-0 border-none"
                  name="remember"
                  type="checkbox"
                  id="remember"
                />
                <label className="text-white" htmlFor="remember">
                  Remember me
                </label>
              </div>

              <Link
                className="underline self-end text-green-500 hover:text-green-300"
                to="/forgot-password"
              >
                Forgot password?
              </Link>

              <button
                className="bg-neutral-800 hover:bg-neutral-600 hover:text-blue-500 text-white w-10/12 self-center h-10 mt-5 transition-all rounded-md"
                type="submit"
              >
                Sign In
              </button>

              <p className="text-white self-center w-full text-center border-b-2 my-3">
                or
              </p>

              <button
                type="button"
                className="bg-neutral-800 hover:text-green-500 transition-all hover:bg-neutral-600 text-white w-10/12 self-center h-11 mt-2 rounded-md"
              >
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Continue with Google
              </button>

              <button
                type="button"
                className="bg-neutral-800 hover:text-blue-500 transition-all hover:bg-neutral-600 text-white w-10/12 self-center h-11 rounded-md"
              >
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Continue with Facebook
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
