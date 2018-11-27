

import {action} from "mobx"
import { decorate, observable } from "mobx"


class Store {
    employeesList = [
      { name: "John Doe", salary: 150 },
      { name: "Richard Roe", salary: 225 },
    ]
    clearList() {
      this.employeesList = []
    }
  
    pushEmployee(e) {
      this.employeesList.push(e)
    }
  }
  
  decorate(Store, {
    employeesList: observable,
    clearList: action,
    pushEmployee: action
  })
  
  export default Store