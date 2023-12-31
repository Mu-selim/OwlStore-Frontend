import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Navbar } from "../components/navbar";
import { JoinPage } from "../pages/join";
import { JoinContextProvider } from "../contexts/joinContext";
import { SigninPage } from "../pages/signin";
import { HomePage } from "../pages/home";
import { ProductPage } from "../pages/product";
import { ExplorePage } from "../pages/explore";
import { Dashboard } from "../pages/dashBoard";
import { AuthChecker } from "../components/authChecker";
import { AboutPage } from "../pages/about";
import { ContactUs } from "../pages/contactUs";
import { CheckOut } from "../pages/checkOut";
import { Delivering } from "../pages/delivering";

const NavLayout = () => {
  return (
    <div className="h-screen w-full max-w-screen-2xl mx-auto">
      <AuthChecker />
      <Navbar />
      <Outlet />
    </div>
  );
};

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="checkOut" element={<CheckOut />} />
          <Route path="delivering" element={<Delivering />} />
        </Route>
        <Route
          path="/join"
          element={
            <JoinContextProvider>
              <JoinPage />
            </JoinContextProvider>
          }
        />
        <Route path="signin" element={<SigninPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};
