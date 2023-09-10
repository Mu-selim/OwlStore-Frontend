import { SEO } from "../../components/SEO";
import { HeroSection } from "./heroSection";

export const HomePage = () => {
  return (
    <main>
      <SEO
        title="OwlStore"
        description="OwlStore is mainly the final project of ITI summer training in web development using React track. It is a simple e-commerce website that allows users to buy products and add them to their cart. It also allows users to add products to the website and manage them."
      />
      <HeroSection />
    </main>
  );
};
