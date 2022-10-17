import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

export type IInitialValues = {
  name: string;
  email: string;
  phoneNumber: string;
  dateOfEmployment: string;
  dateOfBirth: string;
  city: string;
  ZIPCode: string;
  addressLine1: string;
  addressLine2: string;
};

type Props = {
  action: (values: IInitialValues) => void;
  isLoading: boolean;
  initialValues?: IInitialValues;
};

export default function CustomForm({
  action,
  isLoading,
  initialValues = emptyInitialValues,
}: Props) {
  const onSubmit = (values: IInitialValues) => {
    action(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      onSubmit={formik.handleSubmit}
    >
      <div>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          placeholder="John Doe"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          name="name"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="test@test.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          name="email"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          placeholder="+3816(X)-XXX-XXX"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          name="phoneNumber"
          size="small"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Date of Employment"
          variant="outlined"
          value={formik.values.dateOfEmployment}
          onChange={formik.handleChange}
          placeholder="YYYY-MM-DD"
          error={
            formik.touched.dateOfEmployment &&
            Boolean(formik.errors.dateOfEmployment)
          }
          helperText={
            formik.touched.dateOfEmployment && formik.errors.dateOfEmployment
          }
          name="dateOfEmployment"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Date of Birth"
          variant="outlined"
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          error={
            formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
          }
          placeholder="YYYY-MM-DD"
          helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
          name="dateOfBirth"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          placeholder="London"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          name="city"
          size="small"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="ZIP Code"
          placeholder="21000"
          variant="outlined"
          value={formik.values.ZIPCode}
          onChange={formik.handleChange}
          error={formik.touched.ZIPCode && Boolean(formik.errors.ZIPCode)}
          helperText={formik.touched.ZIPCode && formik.errors.ZIPCode}
          name="ZIPCode"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Address Line 1"
          variant="outlined"
          placeholder="Royal Mile 3"
          value={formik.values.addressLine1}
          onChange={formik.handleChange}
          error={
            formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)
          }
          helperText={formik.touched.addressLine1 && formik.errors.addressLine1}
          name="addressLine1"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Address line 2"
          variant="outlined"
          placeholder="Royal Mile 5"
          value={formik.values.addressLine2}
          onChange={formik.handleChange}
          error={
            formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)
          }
          helperText={formik.touched.addressLine2 && formik.errors.addressLine2}
          name="addressLine2"
          size="small"
        />
      </div>
      <Button
        disabled={isLoading}
        color="primary"
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  dateOfEmployment: yup.string().required("Date of employment is required"),
  dateOfBirth: yup.string().required("Date of birth is required"),
  city: yup.string().required("City is required"),
  ZIPCode: yup.string().required("ZIP code is required"),
  addressLine1: yup.string().required("Address 1 is required"),
  addressLine2: yup.string().required("Address 2 is required"),
});

const emptyInitialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  dateOfEmployment: "",
  dateOfBirth: "",
  city: "",
  ZIPCode: "",
  addressLine1: "",
  addressLine2: "",
};
