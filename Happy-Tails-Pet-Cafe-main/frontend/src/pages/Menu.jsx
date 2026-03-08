import "./Menu.css";
import menu1 from "../assets/menu1.JPG";   // use your exact filename
import menu2 from "../assets/menu2.JPG";   // use your exact filename

function Menu() {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Café Menu</h1>

      <div className="menu-grid">
        <div className="menu-card">
          <img src={menu1} alt="Drinks Menu" />
        </div>

        <div className="menu-card">
          <img src={menu2} alt="Food Menu" />
        </div>
      </div>
    </div>
  );
}

export default Menu;