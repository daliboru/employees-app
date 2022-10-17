import axios from "axios";
import { IEmployee, IEmployeeInput } from "../shared/types";

export const PER_PAGE_LIMIT = 1;

const apiClient = axios.create({
  baseURL: "http://142.132.229.249:3000/",
});

const findAll = async (page: number) => {
  const { data } = await apiClient.get<{
    employees: IEmployee[];
    count: number;
  }>(`/employees?page=${page}&limit=${PER_PAGE_LIMIT}`);
  return data;
};

const findOne = async (id: string) => {
  const { data } = await apiClient.get<IEmployee>(`/employees/id/${id}`);
  return data;
};

const findDeleted = async () => {
  const { data } = await apiClient.get<{
    employees: IEmployee[];
    count: number;
  }>(`/employees/deleted`);
  return data;
};

const create = async (employee: IEmployeeInput) => {
  const { data } = await apiClient.post("/employees", employee);
  return data;
};
const update = async (employee: IEmployee) => {
  const { data } = await apiClient.patch(
    `/employees/${employee._id}`,
    employee
  );
  return data;
};
const deleteOne = async (id: string) => {
  const { data } = await apiClient.delete(`/employees/soft-delete/${id}`);
  return data;
};

const EmployeeService = {
  findAll,
  create,
  update,
  findOne,
  deleteOne,
  findDeleted,
};

export default EmployeeService;
