import { MainRouter } from "./routes";
import { AuthContextContextProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/cartContext";
import { AlertContextProvider } from "./contexts/alertContext";

export const App = () => {

  return (
    <AuthContextContextProvider>
      <CartProvider>
        <AlertContextProvider>
          <MainRouter />
        </AlertContextProvider>
      </CartProvider>
    </AuthContextContextProvider>
  );
};
