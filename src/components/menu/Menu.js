function Nav({ title }) {
  return (
    <li className="menuItem">
      <a href="#">{title}</a>
    </li>
  );
}

const Menu = () => {
  const menuItems = [
    { title: "ჩვენ შესახებ" },
    { title: "სექტორი" },
    { title: "პრატქიკა" },
    { title: "კრიტიკული ხედვა" },
    { title: "სიახლეები" },
    { title: "ვაკანსია" },
    { title: "კონტაქტი" },
    { title: "ჩვენი კლიენტები" },
  ];
  return (
    <ul className="menu">
      {menuItems.map((e, index) => {
        return <Nav key={index} title={e.title} />;
      })}
    </ul>
  );
};

export default Menu;
