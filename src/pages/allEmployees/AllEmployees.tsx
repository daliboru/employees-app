import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IEmployee } from "../../shared/types";
import EmployeeService, {
  PER_PAGE_LIMIT,
} from "../../services/EmployeeServices";

export default function AllEmployees() {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, error, isPreviousData } = useQuery<
    {
      employees: IEmployee[];
      count: number;
    },
    Error
  >(
    ["employees", page],
    async () => {
      return await EmployeeService.findAll(page);
    },
    { keepPreviousData: true }
  );

  const pageDown = () => {
    setPage((old) => Math.max(old - 1, 1));
  };
  const pageUp = () => {
    if (!isPreviousData) {
      setPage((old) => old + 1);
    }
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link to="/add-employee">
          <Button>Add Employee</Button>
        </Link>
        <Link to="/deleted-employees">
          <Button>Deleted Employees</Button>
        </Link>
      </Stack>
      <Typography variant="h4" component="h1" marginY={"1rem"}>
        Company Employees
      </Typography>
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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button disabled={page === 1} onClick={pageDown}>
          &lt;
        </Button>
        <Typography variant="body1" component="h1" marginY={"1rem"}>
          {`Page ${page}`}
        </Typography>
        <Button
          disabled={isPreviousData || page >= maxPage(data.count)}
          onClick={pageUp}
        >
          &gt;
        </Button>
      </Stack>
    </>
  );
}

const maxPage = (numberOfEmployees: number) => {
  return numberOfEmployees / PER_PAGE_LIMIT;
};
