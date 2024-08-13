import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";

const ChangeRestaurant = ({ open, handleDialogResponse }) => {
  return (
    <Dialog open={open}>
      <DialogTitle className="change-dialog-title">
        Items already in cart
      </DialogTitle>

      <DialogContent className="change-res-container">
        Your cart contains items from other restaurant. Would you like to reset
        your cart for adding items from this restaurant?
      </DialogContent>

      <DialogActions>
        <div
          className="change-cancel"
          onClick={() => handleDialogResponse(false)}
        >
          NO
        </div>
        <div className="change-save" onClick={() => handleDialogResponse(true)}>
          YES, START FRESH
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default ChangeRestaurant;
