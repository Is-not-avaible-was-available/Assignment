
import './App.css';
import ApiDataFetcher from "./ApiDataFetcher";

function App() {
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     fetchData();
    // }, []);
    //
    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:8080/event');
    //         setData(response.data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };
    return (
        <div>
           <ApiDataFetcher/>
        </div>
    );
}

export default App;
