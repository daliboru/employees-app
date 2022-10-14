import { Typography } from "@mui/material";
import CustomForm from "../../components/Form";
import { IEmployee } from "../../shared/types";
import axios, { AxiosResponse } from "axios";

type APIResponseType = {
  statusCode: number;
  message: string;
  error: string;
};

const createEmployee = async (
  employee: IEmployee
): Promise<AxiosResponse<APIResponseType>> => {
  const response: AxiosResponse<APIResponseType> = await axios.post(
    "http://142.132.229.249:3000/employees",
    employee
  );
  console.log(response);

  return response;
};

export default function AddEmployee() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Add Employee
      </Typography>
      <CustomForm action={createEmployee} />
    </>
  );
}
