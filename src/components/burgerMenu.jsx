import { useContext } from "react";
import { SideMenuContext } from "../contexts/sideMenuContext";

export const BurgerMenu = () => {
  const { showSideMenu, handleShowSideMenu } = useContext(SideMenuContext);
  return (
    <div
      className="w-8 flex flex-col gap-1 cursor-pointer sm:hidden"
      onClick={handleShowSideMenu}
    >
      <span
        className={
          "h-1 bg-primary rounded-full transition-custom " +
          (showSideMenu ? "translate-y-2 rotate-45" : "w-full")
        }
      ></span>
      <span
        className={
          "h-1 bg-primary rounded-full transition-custom " +
          (showSideMenu ? "w-0" : "w-full")
        }
      ></span>
      <span
        className={
          "h-1 bg-primary rounded-full transition-custom " +
          (showSideMenu ? "-translate-y-2 -rotate-45" : "w-full")
        }
      ></span>
    </div>
  );
};
