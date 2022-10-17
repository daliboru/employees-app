import { Typography } from "@mui/material";
import CustomForm from "../../components/Form";
import { IInitialValues } from "../../components/Form/Form";
import useCreateEmployee from "./hooks/useCreateEmployee";

export default function AddEmployee() {
  const { isCreating, createMutation, createError } = useCreateEmployee();

  const onSubmit = (values: IInitialValues) => {
    let homeAddress = {
      city: values.city,
      ZIPCode: values.ZIPCode,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
    };
    let employee = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      homeAddress,
      dateOfBirth: values.dateOfBirth,
      dateOfEmployment: values.dateOfEmployment,
    };
    createMutation(employee);
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Add Employee
      </Typography>
      <CustomForm action={onSubmit} isLoading={isCreating} />
      {isCreating && (
        <Typography variant="h4" component="h1" gutterBottom>
          Posting...
        </Typography>
      )}
      {createError && (
        <ul>
          {createError.message.map((msg, i) => (
            <Typography key={i} variant="body1" gutterBottom>
              {msg}
            </Typography>
          ))}
        </ul>
      )}
    </>
  );
}
