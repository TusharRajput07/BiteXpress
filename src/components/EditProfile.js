import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useContext, useState } from "react";
import ProfileContext from "../utils/ProfileContext";

const EditProfile = ({ open, handleClose }) => {
  const userData = useContext(ProfileContext);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  const handleSave = () => {
    userData?.updateUsername(inputName);
    userData?.updateUseremail(inputEmail);
    userData?.updateUserAddress(inputAddress);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="dialog-title">Edit Profile</DialogTitle>
      <DialogContent className="dialog-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          id="name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          placeholder="Enter Address"
          id="address"
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <div className="cancel" onClick={handleClose}>
          CANCEL
        </div>
        <div className="save" onClick={handleSave}>
          SAVE
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfile;
