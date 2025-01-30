import { UsersTable } from "../../components/UsersTable/UsersTable";
import "./UsersTableWrapper.css";

export const UsersTableWrapper = () => {
  return (
    <div className="users-table-wrapper">
      <h3>List of corrupt cops</h3>
      <UsersTable />
    </div>
  );
};
