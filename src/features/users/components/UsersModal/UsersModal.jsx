import { useState } from "react";
import Button from "@mui/material/Button";

import { CommonModal } from "../../../../ui/shared/Modal/Modal";
import { UserNameField } from "./components/UserNameField";
import { DatePickerBirthdate } from "./components/DatePickerBirthdate";
import { UserSalaryField } from "./components/UserSalaryField";
import { useModal } from "../../../../hooks/useModal";

import "./UsersModal.css";

const initUser = {
  name: "",
  birthdate: "",
  salary: "",
};

export const UsersModal = ({ onAddUser }) => {
  const [user, setUser] = useState(initUser);

  const { handleClose, handleOpen, isOpen: open } = useModal();

  const handleAddUser = () => {
    onAddUser.mutate(user);
    setUser(initUser);
    handleClose();
  };

  const isAddBtnDisabled =
    Boolean(user.name) && Boolean(user.salary) && Boolean(user.birthdate);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add new user
      </Button>
      <CommonModal
        isOpen={open}
        title="Add user modal"
        onClose={handleClose}
        actions={
          <>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={handleAddUser}
              autoFocus
              disabled={!isAddBtnDisabled}
            >
              Add
            </Button>
          </>
        }
      >
        <div className="users-modal-content">
          <UserNameField onSetUser={setUser} />
          <DatePickerBirthdate onSetUser={setUser} />
          <UserSalaryField onSetUser={setUser} />
        </div>
      </CommonModal>
    </div>
  );
};
