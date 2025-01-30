import TextField from "@mui/material/TextField";

export const UserNameField = ({ onSetUser }) => {
  return (
    <TextField
      id="outlined-basic"
      label="Name"
      variant="outlined"
      onChange={(e) =>
        onSetUser((prev) => {
          return {
            ...prev,
            name: e.target.value,
          };
        })
      }
    />
  );
};
