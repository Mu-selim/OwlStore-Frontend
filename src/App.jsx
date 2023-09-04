import { MainRouter } from "./routes";
import { CartProvider } from "./contexts/cartContext";
import { AlertContextProvider } from "./contexts/alertContext";

export const App = () => {
  return (
    <CartProvider>
      <AlertContextProvider>
        <MainRouter />
      </AlertContextProvider>
    </CartProvider>
  );
};
