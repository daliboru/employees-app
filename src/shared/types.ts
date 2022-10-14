export interface IEmployee {
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
