import React, { useState, useEffect } from 'react';
import EventChart from "./EventChart";

const ApiDataFetcher = ({maxEvents , xAxisVariable}) => {
    const [eventsData, setEventsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const apiUrl = 'http://localhost:8080/event';

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const data = await response.json();
                const slicedData = data.slice(0, maxEvents);
                setEventsData(slicedData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData().then(r => console.log(r)).catch(error => console.log(error));
    }, [apiUrl, maxEvents]); // Only fetch data when apiUrl changes

    return (
        <div>
            {isLoading && <p>Loading events...</p>}
            {error && <p>Error: {error}</p>}
            {eventsData && <EventChart eventsData = {eventsData} xAxisVariable={xAxisVariable}/>}
        </div>
    );
};

export default ApiDataFetcher;