import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../../services/EmployeeServices";
import { IEmployee, ResponseError } from "../../../shared/types";

export default function useUpdateEmployee() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [error, setError] = useState<ResponseError>();
  const { isLoading: isUpdating, mutate: updateMutation } = useMutation(
    async (employee: IEmployee) => {
      return await EmployeeService.update(employee);
    },
    {
      onError: (err: AxiosError) =>
        setError(err.response?.data as ResponseError),
      onSuccess: () => {
        queryClient.invalidateQueries();
        navigate("/");
      },
    }
  );

  return {
    updateError: error,
    isUpdating,
    updateMutation,
  };
}
