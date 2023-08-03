import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
            const {data} = await axios (url);
            if (data) {
                setLoading(false);
                setData(data.data);
            }
        } catch (error)
            setLoading(false);
            setError(error);
        }
    };
        fetchData();
    }, [url];


export default useFetch;