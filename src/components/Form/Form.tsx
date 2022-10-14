import { Box, Button, TextField } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { IEmployee } from "../../shared/types";

type Props = {
  action: (o: IEmployee) => void;
};

export default function CustomForm({ action }: Props) {
  const onSubmit = (
    values: typeof initialValues,
    onSubmitProps: FormikHelpers<typeof initialValues>
  ) => {
    let homeAddress = {
      city: values.city,
      ZIPCode: values.ZIPCode,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
    };
    let employee = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      homeAddress,
      dateOfBirth: values.dateOfBirth,
      dateOfEmployment: values.dateOfEmployment,
    };
    action(employee);
    onSubmitProps.resetForm();
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
          helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
          name="dateOfBirth"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
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
      <Button color="primary" variant="contained" type="submit">
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

const initialValues = {
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
