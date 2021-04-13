import axios from "axios";
const API_URL = "http://localhost:8000";
export default class employeesService {
  constructor() {}
  getemployees() {
    console.log("get employees");
    const url = `${API_URL}/api/employees`;
    return axios.get(url).then((response) => response.data);
  }
  getemployeesByURL(link) {
    const url = `${API_URL}${link}`;
    return axios.get(url).then((response) => response.data);
  }
  getCustomer(pk) {
    const url = `${API_URL}/api/employees/${pk}`;
    return axios.get(url).then((response) => response.data);
  }
  deleteCustomer(customer) {
    const url = `${API_URL}/api/employees/${customer.pk}`;
    return axios.delete(url);
  }
  createCustomer(customer) {
    const url = `${API_URL}/api/employees`;
    return axios.post(url, customer);
  }
  updateCustomer(customer) {
    const url = `${API_URL}/api/employees/${customer.pk}`;
    return axios.put(url, customer);
  }
}
