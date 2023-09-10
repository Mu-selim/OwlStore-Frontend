import { MainRouter } from "./routes";
import { AuthContextContextProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/cartContext";
import { AlertContextProvider } from "./contexts/alertContext";
import { WishListProvider } from "./contexts/wishListContext";
import { HelmetProvider } from "react-helmet-async";

export const App = () => {
  return (
    <HelmetProvider>
      <AuthContextContextProvider>
        <CartProvider>
          <AlertContextProvider>
            <WishListProvider>
              <MainRouter />
            </WishListProvider>
          </AlertContextProvider>
        </CartProvider>
      </AuthContextContextProvider>
    </HelmetProvider>
  );
};
