import Button from "@mui/material/Button";
import WarningIcon from "@mui/icons-material/Warning";

import { CommonModal } from "../../../../ui/shared/Modal/Modal";

export const RemoveUserModal = ({ isOpen, onCancel, onApply }) => {
  return (
    <CommonModal
      isOpen={isOpen}
      title="Remove user modal"
      actions={
        <>
          <Button onClick={onCancel}>No</Button>
          <Button onClick={onApply}>Yes</Button>
        </>
      }
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <WarningIcon color="warning" />
        <p>This action will remove the user! Are you sure to continue?</p>
      </div>
    </CommonModal>
  );
};
