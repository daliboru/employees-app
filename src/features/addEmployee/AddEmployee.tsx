import { Typography } from "@mui/material";
import AddEmployeeForm from "./components/Form";

export default function AddEmployee() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Add Employee
      </Typography>
      <AddEmployeeForm />
    </>
  );
}
