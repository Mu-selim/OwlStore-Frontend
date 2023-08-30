import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Navbar } from "../components/navbar";
import { Dashboard } from "../Pages/DashBoard/DashBoard";

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
          <Route index element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/DashBoard" element={<Dashboard />}/>
      </Routes>
    </Router>
  );
};
