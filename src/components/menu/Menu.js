function Nav({ title }) {
  return (
    <li className="menuItem">
      <a href="#">{title}</a>
    </li>
  );
}

const Menu = () => {
  const menuItems = [
    { title: "ჩვენ შესახებ", id: 1 },
    { title: "სექტორი", id: 2 },
    { title: "პრატქიკა", id: 3 },
    { title: "კრიტიკული ხედვა", id: 4 },
    { title: "სიახლეები", id: 5 },
    { title: "ვაკანსია", id: 6 },
    { title: "კონტაქტი", id: 7 },
    { title: "ჩვენი კლიენტები", id: 8 },
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
