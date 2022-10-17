export interface IEmployeeInput {
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  dateOfEmployment: string;
  homeAddress: {
    city: string;
    ZIPCode: string;
    addressLine1: string;
    addressLine2: string;
  };
}

export interface IEmployee extends IEmployeeInput {
  _id: string;
}

export interface ResponseError {
  statusCode: number;
  message: string[];
  error: string;
}
