export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    phoneNo: number;
    address: Address;
}

class Address {
    id: number;
    street: string;
    city: string;
    zipcode: number;
}