import React, { useState, useEffect } from "react";
import { useSelector, useStore } from 'react-redux'
import { selectEmployee } from '../utils/selector'
import ReactPaginate from 'react-paginate'
function EmployeeListe() {
    const employees = useSelector(selectEmployee)
    const [employes, setEmployees] = useState(employees.data)
    const [pageNumber, setPageNumber] = useState(0)
    const [nbEntries, setNbEntries] = useState(10)
    console.log(nbEntries)

    const employeesPerPage = nbEntries
    const pageVisited = pageNumber * employeesPerPage
    const displayEmployees = employes.slice(pageVisited, pageVisited + employeesPerPage).map((employee) => {
        return(
            <tr>
                <td key={employee.firstName}>{employee.firstName}</td>
                <td key={employee.lastName}>{employee.lastName}</td>
                <td key={employee.startDate}>{employee.startDate}</td>
                <td key={employee.department}>{employee.department}</td>
                <td key={employee.dateOfBirth}>{employee.dateOfBirth}</td>
                <td key={employee.street}>{employee.street}</td>
                <td key={employee.city}>{employee.city}</td>
                <td key={employee.state}>{employee.state}</td>
                <td key={employee.zipCode}>{employee.zipCode}</td>
            </tr>
        )
    })

    const pageCount = Math.ceil(employes.length / employeesPerPage)
    console.log(pageCount)
    console.log(employes.length) // Nombre total d'employées enregistré
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    let numberOfFirstEmployeeShownOnPage = pageVisited + 1
    let employeesShowPerPage = pageVisited + employeesPerPage
    switch (employeesShowPerPage) {
        case "010":
            employeesShowPerPage = 10
            break;

        case "025":
            employeesShowPerPage = 25
            break;

        case "050":
            employeesShowPerPage = 50
            break;
    
        default:
            break;
    }

    if (employes.length == 0) {
        numberOfFirstEmployeeShownOnPage = pageVisited
    }
    if (employeesShowPerPage > employes.length) {
        employeesShowPerPage = employes.length
    }
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
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Start date</th>
                        <th>Departement</th>
                        <th>Date of birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {displayEmployees}
                </tbody>
            </table>
            <div>
                <span>{`Showing ${numberOfFirstEmployeeShownOnPage} to ${employeesShowPerPage} of ${employes.length} entries`}</span>
            </div>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"disabledBtn"}
            activeClassName={"activePage"}
            />
        </React.StrictMode>
    )
}
export default EmployeeListe