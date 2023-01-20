import "../CSS/Navbar.css";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar">
      <nav>
        <Link className= "logo" to="/">Online Shop</Link>
        <Link className="cart" to="./cart">
          <FaShoppingBag  className="cartbag"/>
          <div className="total">
            <h3>0</h3>
          </div>
        </Link>
      </nav>
    </section>
  );
};

export default Navbar;
