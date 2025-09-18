import { useState } from 'react';

import SearchPage from './searchPage'
import CocktailPage from './cocktailPage'
import ApiFetch from './apiFetch'
import Nav from './nav'

function App() {

    const [searchTerm, setSearchTerm] = useState(null);

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    const handleReset = () => {
        setSearchTerm(null);
    }

    return(
        <>
        {searchTerm ? (
            <CocktailPage searchTerm={searchTerm} onReset={handleReset}/>
        ) : (
            <SearchPage onSearch={handleSearch} />
        )}
        </>
    );
}

export default App