const TEAM_MEMBER = {
  name: "Kareem Khalaf",
  description:
    "Built some pages and components in this project as a front-end developer. here is what I did:",
  list: [
    {
      title: "Product Page",
      description:
        "Implemented dynamic page for deferent products with deferent categories.",
    },
    {
      title: "Explore Page",
      description:
        "Implemented dynamic page for exploring available products and filter them according to \n gender and category.",
    },
    {
      title: "CheckOut Page",
      description:
        "Implemented dynamic page for collect user's address and credit card info before buying the items in the cart and send him email contains the details of the order.",
    },
    {
      title: "Delivering Page",
      description:
        "Implemented page to be displayed to user after buying to inform him about the order mail that has been sent to him.",
    },
    {
      title: "Footer",
      description:
        "Built the Footer component with our social links and copy rights claims.",
    },
    {
      title: "Product Card",
      description:
        "Implemented a card to contain a Product been passed to, to display on the explore page and the carousel.",
    },
    {
      title: "Product Carousel",
      description:
        "Build a dynamic Carousel from scratch to contain any number of product card on any screen size.",
    },
    {
      title: "Data Gathering",
      description:
        "Gathered Products images, names, prices, category etc... , build product class and product array.",
    },
  ],
};

export const KareemRole = () => {
  return (
    <div className="my-5">
      <h3 className="w-fit text-2xl font-bold nav-link py-0">
        {TEAM_MEMBER.name}
      </h3>
      <p className=" text-gray-800 max-w-sm">{TEAM_MEMBER.description}</p>
      <ul className="mt-4 text-sm text-gray-800 max-w-sm flex flex-col gap-2">
        {TEAM_MEMBER.list.map((item, i) => (
          <li key={i}>
            <span className="font-bold">{item.title}: </span>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
