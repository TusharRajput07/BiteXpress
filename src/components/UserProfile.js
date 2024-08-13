import PersonIcon from "@mui/icons-material/Person";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import EditProfile from "./EditProfile";
import { useContext, useState } from "react";
import ProfileContext from "../utils/ProfileContext";

const UserProfile = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const userData = useContext(ProfileContext);

  const handleClick = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="profile-container">
      <div className="profile-upper-container">
        <div className="profile-logo-container">
          <PersonIcon className="profile-logo" />
        </div>
        <div className="edit-profile" onClick={handleClick}>
          Edit Profile
        </div>
      </div>

      <div className="profile-heading">Hello {userData?.username}!</div>
      <div className="profile-email">{userData.useremail}</div>

      <div className="profile-card-container">
        <div className="profile-card">
          <DeliveryDiningIcon fontSize="large" className="profile-card-icon" />
          <div className="profile-card-heading">Orders</div>
          <div className="order-text">check your order status</div>
        </div>
        <div className="profile-card">
          <ShoppingCartIcon fontSize="large" className="profile-card-icon" />
          <div className="profile-card-heading">Your Cart</div>
          <div className="order-text">check your cart details</div>
        </div>
        <div className="profile-card">
          <HomeIcon fontSize="large" className="profile-card-icon" />
          <div className="profile-card-heading">Address</div>
          <div className="order-text">{userData?.useraddress}</div>
        </div>
      </div>

      <EditProfile open={openDialog} handleClose={handleClick} />
    </div>
  );
};

export default UserProfile;
