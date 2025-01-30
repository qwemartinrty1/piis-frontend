import { useMemo, useState } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import { fetchUsers } from "../../api/fetchUsers";
import { createUser } from "../../api/createUser";
import { UsersModal } from "../UsersModal/UsersModal";
import { useModal } from "../../../../hooks/useModal";
import { RemoveUserModal } from "../RemoveUserModal/RemoveUsersModal";
import { removeUserAction } from "../../api/removeUser";
import { updateUserAction } from "../../api/editUser";

import "./UsersTable.css";

export const UsersTable = () => {
  const queryClient = useQueryClient();
  const {
    handleClose: handleCloseRemoveUser,
    isOpen: isRemoveUserOpen,
    handleOpen: handleOpenRemoveUser,
  } = useModal();
  const [userId, setUserId] = useState(null);

  // fetch all users
  const { data: usersList, isLoading: isUsersListLoading } = useQuery({
    queryFn: fetchUsers,
    queryKey: ["users"],
  });

  // add user
  const addUser = useMutation({
    mutationFn: (user) => createUser(user),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] }).then();
    },
  });

  // remove user
  const removeUser = useMutation({
    mutationFn: (id) => removeUserAction(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }).then();
    },
  });

  // edit user
  const editUser = useMutation({
    mutationFn: (user) => updateUserAction(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }).then();
    },
  });

  const handleOpenRemoveUserModal = (id) => {
    handleOpenRemoveUser();
    setUserId(id);
  };

  const handleCloseRemoveUserModal = () => {
    setUserId(null);
    handleCloseRemoveUser();
  };

  const handleApplyRemoveUser = () => {
    removeUser.mutate(userId);
    setUserId(null);
    handleCloseRemoveUser();
  };

  const usersTableColumns = useMemo(() => {
    return [
      {
        field: "name",
        headerName: "Name",
        width: 285,
        editable: true,
        disableColumnMenu: true,
        hideSortIcons: true,
      },
      {
        field: "birthdate",
        headerName: "Birth Date",
        type: "string",
        width: 285,
        editable: true,
        disableColumnMenu: true,
        hideSortIcons: true,
      },
      {
        field: "salary",
        headerName: "Salary",
        type: "string",
        width: 285,
        editable: true,
        disableColumnMenu: true,
        hideSortIcons: true,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        editable: false,
        hideSortIcons: true,
        disableColumnMenu: true,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon color={"error"} />}
            label="Delete"
            onClick={() => handleOpenRemoveUserModal(params.row.id)}
          />,
        ],
      },
    ];
    // eslint-disable-next-line
  }, []);

  const handleEdit = (updatedUser) => {
    editUser.mutate(updatedUser);
    return updatedUser;
  };

  return (
    <>
      <div style={{ height: 500, maxWidth: 1140 }}>
        <DataGrid
          editMode="row"
          rows={usersList}
          loading={isUsersListLoading}
          columns={usersTableColumns}
          processRowUpdate={handleEdit}
          onProcessRowUpdateError={(e) => console.log(e)}
          hideFooter
        />
        <div className="modal-action">
          <UsersModal onAddUser={addUser} />
        </div>
        <RemoveUserModal
          isOpen={isRemoveUserOpen}
          onApply={handleApplyRemoveUser}
          onCancel={handleCloseRemoveUserModal}
        />
      </div>
    </>
  );
};
