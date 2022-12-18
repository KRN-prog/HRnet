import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useStore } from 'react-redux'
import data from '../features/data'
import Modal from '../components/Modal'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
    const [modal, setModal] = useState(false)
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const streetName = useRef(null);
    const cityName = useRef(null);
    const stateName = useRef(null);
    const zipCode = useRef(null);
    const department = useRef(null);


    const handleSubmit = event => {
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('first name 👉️', firstName.current.value);
        console.log('last name 👉️', lastName.current.value);

        console.log('date of birth 👉️', dateOfBirth);
        console.log('start date 👉️', startDate);
        console.log('street name 👉️', streetName.current.value);
        console.log('city name 👉️', cityName.current.value);
        console.log('state name 👉️', stateName.current.value);
        console.log('zip code 👉️', zipCode.current.value);
        console.log('department 👉️', department.current.value);
        let newBirthDate = null
        let newStartDate = null
        if (dateOfBirth) {
            newBirthDate = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth()}/${dateOfBirth.getFullYear()}`
            newStartDate = `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`
        }
        const employee = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            dateOfBirth: newBirthDate,
            startDate: newStartDate,
            department: department.current.value,
            street: streetName.current.value,
            city: cityName.current.value,
            state: stateName.current.value,
            zipCode: zipCode.current.value
        };
        console.log(employee)


        // 👇️ clear all input values in the form
        event.target.reset();
    }
    return(
        <React.StrictMode>
            { modal === true ? <Modal /> : null }
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <a href="employee-list.html">View Current Employees</a>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee" onSubmit={handleSubmit}>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" ref={firstName}/>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" ref={lastName}/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker id="date-of-birth" selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} maxDate={new Date()} showDisabledMonthNavigation />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker id="date-of-birth" selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} showDisabledMonthNavigation />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" name="street" type="text" ref={streetName}/>

                        <label htmlFor="city">City</label>
                        <input id="city" name="city" type="text" ref={cityName}/>

                        <label htmlFor="state">State</label>
                        <select name="state" id="state" ref={stateName}>
                            {data.map(element => {
                                return(<option key={element.abbreviation} value={element.abbreviation}>{element.name}</option>)
                            })}
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" name="zip-code" type="number" ref={zipCode}/>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" ref={department}>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>

                    <div>
                        <button>Save</button>
                    </div>
                </form>

            </div>
        </React.StrictMode>
    )
}

export default Home