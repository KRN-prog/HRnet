import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useStore } from 'react-redux'
import data from '../features/data'
import Modal from '../components/Modal'

function Home() {
    const [modal, setModal] = useState(false)
    const [fieldValues, setFieldValues] = useState(false)


    const firstRef = useRef(null);
    const lastRef = useRef(null);

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('first 👉️', firstRef.current.value);
        console.log('last 👉️', lastRef.current.value);

        // 👇️ clear all input values in the form
        event.target.reset();
    };


    console.log(fieldValues)
    const submit = e => {
        e.preventDefault()
        console.log(fieldValues)
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
                    <input type="text" id="first-name" name="first-name"  ref={firstRef}/>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name"  ref={lastRef}/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" name="date-of-birth" type="text"  />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" name="start-date" type="text"  />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" name="street" type="text"  />

                        <label htmlFor="city">City</label>
                        <input id="city" name="city" type="text"  />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state" >
                            {data.map(element => {
                                return(<option key={element.abbreviation} value={element.abbreviation}>{element.name}</option>)
                            })}
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" name="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
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