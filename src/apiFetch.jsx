import {useEffect, useState} from 'react';

function ApiFetch(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Component mounted');
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then((response) => {
            if(!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then((data) => setData(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Fetched Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default ApiFetch;