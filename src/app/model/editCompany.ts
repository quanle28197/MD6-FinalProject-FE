import {City} from './city';

export class EditCompany {
  name: string;
  avatar: string;
  description: string;
  address: string;
  employeeQuantity: number;
  city?: City;
  linkMap: string;
  phone: string;

  constructor(name: string, avatar: string, description: string, address: string, employeeQuantity: number, city: City, linkMap: string, phone: string) {
    this.name = name;
    this.avatar = avatar;
    this.description = description;
    this.address = address;
    this.employeeQuantity = employeeQuantity;
    this.city = city;
    this.linkMap = linkMap;
    this.phone = phone;
  }
}
