import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";

interface IFormValues {
  name: string;
  email: string;
  phoneNumber: string;
}

const InnerForm = (props: FormikProps<IFormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form>
      <Field type="string" name="name" placeholder="Name" />
      {touched.name && errors.name && <div>{errors.name}</div>}
      <Field type="email" name="email" placeholder="Email" />
      {touched.email && errors.email && <div>{errors.email}</div>}
      <Field type="string" name="phoneNumber" placeholder="Phone number" />
      {touched.phoneNumber && errors.phoneNumber && (
        <div>{errors.phoneNumber}</div>
      )}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

interface IFormProps {
  initialEmail?: string;
  initialName?: string;
  initialPhoneNumber?: string;
}

const AddEmployeeForm = withFormik<IFormProps, IFormValues>({
  mapPropsToValues: (props) => {
    return {
      name: props.initialName || "",
      email: props.initialEmail || "",
      phoneNumber: props.initialPhoneNumber || "",
    };
  },
  validate: (values: IFormValues) => {
    let errors: FormikErrors<IFormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    }
    return errors;
  },

  handleSubmit: (values) => {
    console.log(values);

    // do submitting things
  },
})(InnerForm);

export default AddEmployeeForm;
