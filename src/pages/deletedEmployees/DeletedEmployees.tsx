import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import EmployeeService from "../../services/EmployeeServices";
import { IEmployee } from "../../shared/types";

export default function DeletedEmployees() {
  const { isLoading, isError, data, error } = useQuery<
    {
      employees: IEmployee[];
      count: number;
    },
    Error
  >(["deletedEmployees"], async () => {
    return await EmployeeService.findDeleted();
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Typography variant="h4" component="h1" marginY={"1rem"}>
        Deleted Employees
      </Typography>
      <List>
        {data.employees.map((employee, i) => (
          <ListItem disablePadding key={employee._id}>
            <ListItemText secondary={`${i + 1}. ${employee.name}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
