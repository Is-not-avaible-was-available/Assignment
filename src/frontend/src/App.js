import ApiDataFetcher from "./ApiDataFetcher";
import EventChart from "./EventChart";
import React, { useState } from 'react';


const App = () =>{
const [xAxisVariable, setXAxisVariable] = useState('startYear');
const [maxEvents, setMaxEvents] = useState(25);// Default to startYear

const handleVariableChange = (event) => {
    setXAxisVariable(event.target.value);

};

const handleEventsNumberChange = (event)=>{
    setMaxEvents(event.target.value);
}

return (
    <div>
        <h1>Event Data Visualization</h1>
        <div>
            <label htmlFor="xAxisVariable">Select X-Axis Variable:</label>
            <select id="xAxisVariable" value={xAxisVariable} onChange={handleVariableChange}>
                <option value="startYear">Start Year</option>
                <option value="city">City</option>
                <option value="country">Country</option>
                <option value="region">Region</option>
            </select>

            <label htmlFor="maxEvents">Select number of Events:</label>
            <select id="maxEvents" value={maxEvents} onChange={handleEventsNumberChange}>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
                <option value="250">250</option>
            </select>
        </div>
        <ApiDataFetcher maxEvents={maxEvents} xAxisVariable={xAxisVariable}/>
    </div>
);
};

export default App;