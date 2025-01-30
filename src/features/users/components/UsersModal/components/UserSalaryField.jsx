import TextField from "@mui/material/TextField";

export const UserSalaryField = ({ onSetUser }) => {
  return (
    <TextField
      id="outlined-basic"
      label="Salary"
      variant="outlined"
      onChange={(e) =>
        onSetUser((prev) => {
          return {
            ...prev,
            salary: e.target.value,
          };
        })
      }
    />
  );
};
