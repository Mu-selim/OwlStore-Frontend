const TEAM_MEMBER = {
  name: "Muhammad Selim",
  description:
    "Built some pages and components in this project as a front-end developer. here is what I did:",
  list: [
    {
      title: "Home Page",
      description:
        "Implemented the hero section with smooth tranistion betweem images.",
    },
    {
      title: "Navbar and SideMenu",
      description:
        "Built the navbar and side menu to enable the user to navigate between pages. Also, React Router was used to handle the routing.",
    },
    {
      title: "Join and Sign In Pages",
      description:
        "Implemented FormContainer, Input, Button components to use it multiple times in the project 'DRY'. Also, Join Form is a multi-step form with complex validation. In addition, Save User Data and progress in Local Storage.",
    },
    {
      title: "Cart Component",
      description:
        "Handled the cart component and its functionality using Context API and Local Storage then integrated it with the navbar and the other pages.",
    },
    {
      title: "About Page",
      description: "Built the styles and the layout of the page with the team.",
    },
    {
      title: "Router and Confilcts",
      description:
        "Handled the routing and the conflicts in the project using Git and Github.",
    },
  ],
};

export const SelimRole = () => {
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
