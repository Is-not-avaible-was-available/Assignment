import ApiDataFetcher from "./ApiDataFetcher";
import EventChart from "./EventChart";
import React, { useState } from 'react';


const App = () =>{
const [xAxisVariable, setXAxisVariable] = useState('startYear'); // Default to startYear

const handleVariableChange = (event) => {
    setXAxisVariable(event.target.value);
};

return (
    <div>
        <h1>Event Data Visualization</h1>
        <div>
            <label htmlFor="xAxisVariable">Select X-Axis Variable:</label>
            <select id="xAxisVariable" value={xAxisVariable} onChange={handleVariableChange}>
                <option value="startYear">Start Year</option>
                <option value="city">City</option>
                <option value="country">Country</option>
                <option value="country">Region</option>
            </select>
        </div>
        <ApiDataFetcher maxEvents={30} xAxisVariable={xAxisVariable}/>
    </div>
);
};

export default App;