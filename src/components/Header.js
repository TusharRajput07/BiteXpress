// Header Component
import { Link } from "react-router-dom";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCartDetails from "../utils/useCartDetails";
import ProfileContext from "../utils/ProfileContext";
import { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const { cartQty } = useCartDetails();
  const { username } = useContext(ProfileContext);

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo-icon-container">
          <RamenDiningIcon fontSize="large" className="logo" />
        </div>
        <Link to="/">
          <div className="brand-name">BiteXpress</div>
        </Link>
      </div>
      <div className="nav-items">
        <div className="item">
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <a href="/about">About</a>
        </div>
        <div className="item">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="item header-profile">
          <AccountCircleIcon className="header-profile-icon" />
          <Link to="/profile">{username}</Link>
        </div>
        <div className="cart-container">
          <Link to="/cart">
            <ShoppingCartIcon className="cart" />
            {cartQty > 0 && <div className="header-cart-items">{cartQty}</div>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
