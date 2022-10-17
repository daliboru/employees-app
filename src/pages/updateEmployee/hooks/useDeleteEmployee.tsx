import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../../services/EmployeeServices";
import { ResponseError } from "../../../shared/types";

export default function useDeleteEmployee() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [error, setError] = useState<ResponseError>();
  const { isLoading: isDeleting, mutate: deleteMutation } = useMutation(
    async (id: string) => {
      return await EmployeeService.deleteOne(id);
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
    deleteError: error,
    isDeleting,
    deleteMutation,
  };
}
