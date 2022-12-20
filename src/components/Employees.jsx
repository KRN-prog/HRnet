import React, { useState } from "react";
import ReactPaginate from 'react-paginate'
import { useStore } from 'react-redux'
import { fetchOrUpdateEmployee } from '../features/createEmployee'

function Employees({nbEntries, data}) {
    const store = useStore()
    //const employes = useSelector(selectEmployee)
    const employees = data
    // A L'écoute des modification du store
    console.log(employees)
    const [pageNumber, setPageNumber] = useState(0)
    const employeesPerPage = nbEntries // Nombre d'employées affiché par pages
    const pageVisited = pageNumber * employeesPerPage // Sur qu'elle page on se trouve
    const pageCount = Math.ceil(employees.length / employeesPerPage) // Nombre de page au total
    const changePage = ({selected}) => {
        setPageNumber(selected)
    } // Fonction qui va nous permettre d'afficher le nombre de page
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

    // Si le nombre d'entré est égal à 0 alors on met à 0
    if (employees.length === 0) {
        numberOfFirstEmployeeShownOnPage = pageVisited
    }

    /*if (numberOfFirstEmployeeShownOnPage > employeesShowPerPage) {
        numberOfFirstEmployeeShownOnPage = 1
    }*/

    // Si le nombre d'employées montré dans 'Showing ... to ...' est plus grand que le nombre d'entrée réel alors ce sera égale au nombre d'entrées total
    if (employeesShowPerPage > employees.length) {
        employeesShowPerPage = employees.length
    }




    const displayEmployees = employees.slice(pageVisited, pageVisited + employeesPerPage).map((employee, employeeIx) => {
        return(
            <tr key={`employee-${employeeIx}`}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate.toLocaleDateString()}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth.toLocaleDateString()}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
            </tr>
        )
    })


    const [order, setOrder] = useState("ASC")
    const sorting = (col, type) => {
        console.log(type)
        if (type === "string") {
            if (order === "ASC") {
                const sorted = [...employees].sort((a,b) =>{
                    return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                })
                fetchOrUpdateEmployee(store, sorted)
                setOrder("DESC")
            }
            if (order === "DESC") {
                const sorted = [...employees].sort((a,b) =>{
                    console.log(a[col])
                    return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                })
                fetchOrUpdateEmployee(store, sorted)
                setOrder("ASC")
            }
        }else if (type === "int") {
            if (order === "ASC") {
                const sorted = [...employees].sort((a,b) =>{
                    let calc
                    if (col === "dateOfBirth" || col === "startDate") {
                        calc = a[col].getTime() - b[col].getTime()
                    }else{
                        calc = a[col] - b[col]
                    }
                    return calc
                })
                fetchOrUpdateEmployee(store, sorted)
                setOrder("DESC")
            }
            if (order === "DESC") {
                const sorted = [...employees].sort((a,b) =>{
                    console.log(new Date(a[col]).getTime())
                    let calc
                    if (col === "dateOfBirth" || col === "startDate") {
                        calc = b[col].getTime() - a[col].getTime()
                    }else{
                        calc = b[col] - a[col]
                    }
                    return calc
                })
                fetchOrUpdateEmployee(store, sorted)
                setOrder("ASC")
            }
        }
    }

    return(
        <React.StrictMode>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => sorting("firstName", "string")}>First name</th>
                        <th onClick={() => sorting("lastName", "string")}>Last name</th>
                        <th onClick={() => sorting("startDate", "int")}>Start date</th>
                        <th onClick={() => sorting("department", "string")}>Departement</th>
                        <th onClick={() => sorting("dateOfBirth", "int")}>Date of birth</th>
                        <th onClick={() => sorting("street", "string")}>Street</th>
                        <th onClick={() => sorting("city", "string")}>City</th>
                        <th onClick={() => sorting("state", "int")}>State</th>
                        <th onClick={() => sorting("zipCode", "int")}>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {displayEmployees}
                </tbody>
            </table>
            <div>
                <span>{`Showing ${numberOfFirstEmployeeShownOnPage} to ${employeesShowPerPage} of ${employees.length} entries`}</span>
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

export default Employees