import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import "./Modal.css";

export const CommonModal = ({
  title = "Modal",
  isOpen,
  onClose,
  children,
  actions,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} disableScrollLock>
      <DialogTitle style={{ color: "black" }}>{title}</DialogTitle>
      <DialogContent>
        <div>{children}</div>
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};
