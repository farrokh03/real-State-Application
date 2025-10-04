import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./../pages/MainPage";
import ShopPage from "../pages/ShopPage";
import ServicesPage from "../pages/ServicesPage";
import SignInPage from "../pages/SigninPage";
import SingUpPage from "../pages/SignUpPage";
import UserAccountPage from "../pages/UserAccount/UserAccount";
import ContactPage from "../pages/ContactusPage";
import Layout from "../Layout/Layout";
import NotFound from "../pages/NotFound";
import UserDashboard from "../pages/UserAccount/UserDashboard";
import Settinge from "../pages/UserAccount/Settinge";
import Notifications from "../pages/UserAccount/Notifications";
import EditProfile from "../pages/UserAccount/EditProfile";
import Wallet from "../pages/UserAccount/Wallet";
import Comments from "../pages/UserAccount/Comments";
import ShoppingBasket from "../pages/UserAccount/Basket";
import History from "../pages/UserAccount/History";
import Wishlist from "../pages/UserAccount/Wishlist";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />

            <Route path="/shop" element={<ShopPage />} />

            <Route path="/services" element={<ServicesPage />} />

            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
          <Route path="/useraccount" element={<UserAccountPage />}>
            <Route index element={<UserDashboard />} />
            <Route path="editprof" element={<EditProfile />} />
            <Route path="userwallet" element={<Wallet />} />
            <Route path="userhistory" element={<History />} />
            <Route path="shoppingbasket" element={<ShoppingBasket />} />
            <Route path="usernotifications" element={<Notifications />} />
            <Route path="userwishlist" element={<Wishlist />} />
            <Route path="usercomments" element={<Comments />} />
            <Route path="profilesetting" element={<Settinge />} />
          </Route>

          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SingUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
