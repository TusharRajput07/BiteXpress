import { createContext } from "react";

const ProfileContext = createContext({
  username: null,
  updateUsername: () => {},
  useremail: null,
  updateUseremail: () => {},
  useraddress: null,
  updateUserAddress: () => {},
});

export default ProfileContext;
