
import './App.css';
import DataVisualizationCard from "./DataVisualizationCard";
import ComparisonBarChart from "./ComparisonBarChart";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/event');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div>
            <h1>Data Visualization Dashboard</h1>
            <DataVisualizationCard factor="intensity" data={data} />
            <ComparisonBarChart category="region" data={data} />
        </div>
    );
}

export default App;
