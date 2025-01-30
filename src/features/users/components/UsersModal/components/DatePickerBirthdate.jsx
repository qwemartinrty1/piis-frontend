import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const DatePickerBirthdate = ({ onSetUser }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Birthdate"
          onChange={(e) =>
            onSetUser((prev) => {
              return {
                ...prev,
                birthdate: dayjs(e).format("DD.MM.YYYY"),
              };
            })
          }
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
