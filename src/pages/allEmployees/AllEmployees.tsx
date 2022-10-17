import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import EmployeeService from "../../services/EmployeeServices";
import { IEmployee } from "../../shared/types";

export default function AllEmployees() {
  const { isLoading, isError, data, error } = useQuery<
    {
      employees: IEmployee[];
      count: number;
    },
    Error
  >(["employees"], async () => {
    return await EmployeeService.findAll();
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Link to="/add-employee">
        <Button>Add Employee</Button>
      </Link>
      <List>
        {data.employees.map((employee) => (
          <Link key={employee._id} to={`/update-employee/${employee._id}`}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText secondary={employee.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}
