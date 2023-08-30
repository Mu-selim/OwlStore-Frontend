import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Navbar } from "../components/navbar";
import { JoinPage } from "../pages/join";
import { JoinContextProvider } from "../contexts/joinContext";

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
        <Route
          path="/join"
          element={
            <JoinContextProvider>
              <JoinPage />
            </JoinContextProvider>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};
