import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectEmployee } from '../utils/selector'
import Employees from '../components/Employees'
function EmployeeListe() {
    const [nbEntries, setNbEntries] = useState(10)
    const [search, setSearch] = useState(null)
    const employees = useSelector(selectEmployee)
    const totalEntries = employees.data.length
    let data

    if (search !== null) {
        console.log(search)
        const research = (employee, research) => {
            return employee.filter((item) => 
                item.firstName.toLowerCase().includes(research.toLowerCase()) ||
                item.lastName.toLowerCase().includes(research.toLowerCase()) ||
                item.dateOfBirth.toLocaleDateString().toString().toLowerCase().includes(research) ||
                item.department.toLowerCase().includes(research.toLowerCase()) ||
                item.startDate.toLocaleDateString().toString().toLowerCase().includes(research) ||
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
            <h1 className="currentEmployee">Current Employees</h1>
            <label className="leftLabel">
                show <select name="employee-table_length" onChange={(e) => setNbEntries(e.target.value)}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select> entries
            </label>
            <label className="rightLabel">
                search <input type="text" onChange={e => {setSearch(e.target.value)}}/>
            </label>
            <Employees key="employees" nbEntries={nbEntries} data={data} totalEntries={totalEntries}/>
            <div className="redirectHome">
                <Link to="/">Home</Link>
            </div>
        </React.StrictMode>
    )
}
export default EmployeeListe