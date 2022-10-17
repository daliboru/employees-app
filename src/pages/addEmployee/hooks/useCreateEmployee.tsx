import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../../services/EmployeeServices";
import { IEmployeeInput, ResponseError } from "../../../shared/types";

export default function useCreateEmployee() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [error, setError] = useState<ResponseError>();
  const { isLoading: isCreating, mutate: createMutation } = useMutation(
    async (employee: IEmployeeInput) => {
      return await EmployeeService.create(employee);
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
    createError: error,
    isCreating,
    createMutation,
  };
}
