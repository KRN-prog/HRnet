import React, { useState } from "react";
import ReactPaginate from 'react-paginate'

function Employees({employees, nbEntries}) {
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
    if (employees.length == 0) {
        numberOfFirstEmployeeShownOnPage = pageVisited
    }

    /*if (numberOfFirstEmployeeShownOnPage > employeesShowPerPage) {
        numberOfFirstEmployeeShownOnPage = 1
    }*/

    // Si le nombre d'employées montré dans 'Showing ... to ...' est plus grand que le nombre d'entrée réel alors ce sera égale au nombre d'entrées total
    if (employeesShowPerPage > employees.length) {
        employeesShowPerPage = employees.length
    }




    const displayEmployees = employees.slice(pageVisited, pageVisited + employeesPerPage).map((employee) => {
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

    console.log(pageCount)
    console.log(employees.length) // Nombre total d'employées enregistré
    console.log(numberOfFirstEmployeeShownOnPage)



    return(
        <React.StrictMode>
            <table>
                <thead>
                    <tr>
                        <th onClick={(e) => {console.log(e)}}>First name</th>
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