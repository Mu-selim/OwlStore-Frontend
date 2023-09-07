const TEAM_MEMBER = {
    name: "Ahmed Zahran",
    description:
      "Built some pages and components in this project as a front-end developer. here is what I did:",
    list: [
      {
        title: "Admin Dashboard",
        description:
          "Built the Dashboard with full CRUD operations, filters, search, sorting, full validation on the inputs and restricted access to the admin of the website.",
      },
      {
        title: "Profile Page",
        description:
          "Built the profile page and used a wishlist to show the user's wishlist items in a carousel",
      },
      {
        title: "Contact Us page",
        description:
          "Designed the contact us page using material-tailwind to give it a modern design and put validation on all inputs.",
      },
    ],
  };
  
  export const ZahranRole = () => {
    return (
      <div>
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
  