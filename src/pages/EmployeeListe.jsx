import React, { useState, useEffect } from "react";
import { useSelector, useStore } from 'react-redux'
import { selectEmployee } from '../utils/selector'
//import { selectEmployee } from '../utils/selector''
import Employees from '../components/Employees'
function EmployeeListe() {
    const [nbEntries, setNbEntries] = useState(10)
    const [search, setSearch] = useState(null)
    const employees = useSelector(selectEmployee)
    let data

    if (search !== null) {
        console.log(search)
        const research = (employee, research) => {
            return employee.filter((item) => 
                //console.log(item.dateOfBirth.toLocaleDateString())
                item.firstName.toLowerCase().includes(research.toLowerCase()) ||
                item.lastName.toLowerCase().includes(research.toLowerCase()) ||
                item.dateOfBirth.toLocaleDateString().toString().toLowerCase().includes(research) ||
                item.department.toLowerCase().includes(research.toLowerCase()) ||
                //item.startDate.includes(research.toLowerCase()) ||
                item.state.toLowerCase().includes(research.toLowerCase()) ||
                item.street.toLowerCase().includes(research.toLowerCase()) ||
                item.city.toLowerCase().includes(research.toLowerCase()) ||
                item.zipCode.includes(research.toLowerCase())
            )
        }
        data = research(employees.data, search)
    }else{
        data = employees.data
    }
    return(
        <React.StrictMode>
            <h1>Current Employees</h1>
            <label>
                show <select name="employee-table_length" onChange={(e) => setNbEntries(e.target.value)}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select> entries
            </label>
            <label>
                search <input type="text" onChange={e => {setSearch(e.target.value)}}/>
            </label>
            <Employees key="employees" nbEntries={nbEntries} data={data}/>
        </React.StrictMode>
    )
}
export default EmployeeListe