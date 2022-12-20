import React, { useState } from "react";
import { useSelector, useStore } from 'react-redux'
import { selectEmployee } from '../utils/selector'
function Sorting(col){
    const employees = useSelector(selectEmployee)
    console.log(employees)
    const [order, setOrder] = useState("ASC")
    if (order === "ASC") {
        const sorted = [...employees].sort((a,b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        )
    }
    if (order === "DESC") {
        const sorted = [...employees].sort((a,b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        )
    }
}
export default Sorting