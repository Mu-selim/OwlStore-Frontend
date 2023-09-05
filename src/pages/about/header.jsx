import { OwlIcon } from "../../components/icons/owlIcon";

export const AboutHeader = () => {
  return (
    <header className="relative mt-16 select-none before:absolute before:left-0 before:-top-8 before:w-28 before:h-3 before:bg-primary before:rounded-full">
      <div className="flex items-center gap-4 flex-wrap">
        <h1 className="text-4xl md:text-5xl font-bold">We are OwlStore</h1>
        <div className="w-16">
          <OwlIcon />
        </div>
      </div>
      <p className="mt-4 max-w-md">
        OwlStore is mainly the final project of ITI summer training in web
        development using React track. It is a simple e-commerce website that
        allows users to buy products and add them to their cart. It also allows
        users to add products to the website and manage them.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Tools used in this project</h2>
        <ul className="mt-2 flex items-center gap-4 flex-wrap">
          <li className="px-4 py-2 font-bold border border-primary rounded-full">
            <a
              href="https://github.com/Mu-selim/ViteWind"
              target="_blank"
              rel="noreferrer"
            >
              ViteWind
            </a>
          </li>
          <li className="px-4 py-2 font-bold border border-primary rounded-full">
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              React 18
            </a>
          </li>
          <li className="px-4 py-2 font-bold border border-primary rounded-full">
            <a href="https://reactrouter.com" target="_blank" rel="noreferrer">
              React Router 6+
            </a>
          </li>
          <li className="px-4 py-2 font-bold border border-primary rounded-full">
            <a
              href="https://react-query.tanstack.com"
              target="_blank"
              rel="noreferrer"
            >
              React Query 3+
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
