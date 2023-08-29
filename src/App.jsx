import { MainRouter } from "./routes";
import { CartProvider } from "./contexts/cartContext";

export const App = () => {
  return (
    <CartProvider>
      <MainRouter />
    </CartProvider>
  );
};
