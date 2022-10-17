import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomForm from "../../components/Form";
import { IInitialValues } from "../../components/Form/Form";
import EmployeeService from "../../services/EmployeeServices";
import { IEmployee } from "../../shared/types";
import useDeleteEmployee from "./hooks/useDeleteEmployee";
import useUpdateEmployee from "./hooks/useUpdateEmployee";

export default function UpdateEmployee() {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<IInitialValues>();
  const {
    isLoading: isEmployeeLoading,
    isError,
    data,
    error: queryError,
  } = useQuery<IEmployee, Error>([`${id}`], async () => {
    return await EmployeeService.findOne(id!);
  });

  const { isUpdating, updateMutation, updateError } = useUpdateEmployee();
  const { deleteError, deleteMutation, isDeleting } = useDeleteEmployee();

  useEffect(() => {
    if (data) {
      setInitialValues({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        dateOfEmployment: data.dateOfEmployment,
        dateOfBirth: data.dateOfBirth,
        city: data.homeAddress.city,
        ZIPCode: data.homeAddress.ZIPCode,
        addressLine1: data.homeAddress.addressLine1,
        addressLine2: data.homeAddress.addressLine2,
      });
    }
  }, [data]);

  const onSubmit = (values: IInitialValues) => {
    const updatedEmployee = formatEmployee(values, id!);
    updateMutation(updatedEmployee);
  };

  if (isEmployeeLoading || !initialValues) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {queryError.message}</span>;
  }

  const deleteEmployee = () => {
    deleteMutation(id!);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Update Employee: {data.name}
        </Typography>
        <Button variant="outlined" color="error" onClick={deleteEmployee}>
          Delete
        </Button>
      </Stack>
      <CustomForm
        action={onSubmit}
        isLoading={isUpdating || isEmployeeLoading || isDeleting}
        initialValues={initialValues}
      />
      {isUpdating && (
        <Typography variant="h4" component="h1" gutterBottom>
          Posting...
        </Typography>
      )}
      {updateError && (
        <ul>
          {updateError.message.map((msg, i) => (
            <Typography key={i} variant="body1" gutterBottom>
              {msg}
            </Typography>
          ))}
        </ul>
      )}
    </>
  );
}

function formatEmployee(values: IInitialValues, id: string) {
  let homeAddress = {
    city: values.city,
    ZIPCode: values.ZIPCode,
    addressLine1: values.addressLine1,
    addressLine2: values.addressLine2,
  };
  let updatedEmployee: IEmployee = {
    name: values.name,
    email: values.email,
    phoneNumber: values.phoneNumber,
    homeAddress,
    dateOfBirth: values.dateOfBirth,
    dateOfEmployment: values.dateOfEmployment,
    _id: id,
  };
  return updatedEmployee;
}
