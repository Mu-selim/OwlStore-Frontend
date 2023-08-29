import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Navbar } from "../components/navbar";
import { HomePage } from "../pages/home";

const NavLayout = () => {
  return (
    <div className="h-screen w-full max-w-screen-2xl mx-auto">
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
          <Route path="about" element={<h1>About</h1>} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};