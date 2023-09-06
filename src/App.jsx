import { MainRouter } from "./routes";
import { AuthContextContextProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/cartContext";
import { AlertContextProvider } from "./contexts/alertContext";
import { WishListProvider } from "./contexts/wishListContext";

export const App = () => {

  return (
    <AuthContextContextProvider>
      <CartProvider>
        <AlertContextProvider>
          <WishListProvider>
            <MainRouter />
          </WishListProvider>
        </AlertContextProvider>
      </CartProvider>
    </AuthContextContextProvider>
  );
};
