import React, { useState, useEffect } from "react";
import { useSelector, useStore } from 'react-redux'
import { selectEmployee } from '../utils/selector'
import ReactPaginate from 'react-paginate'
import Employees from '../components/Employees'
function EmployeeListe() {
    const employees = useSelector(selectEmployee)
    const [employes, setEmployees] = useState(employees.data)
    const [nbEntries, setNbEntries] = useState(10)
    return(
        <React.StrictMode>
            <h1>Current Employees</h1>
            <label>
                show 
                <select name="employee-table_length" onChange={(e) => setNbEntries(e.target.value)}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select> 
                entries
            </label>
            <Employees key="employees" employees={employees.data} nbEntries={nbEntries}/>
        </React.StrictMode>
    )
}
export default EmployeeListe