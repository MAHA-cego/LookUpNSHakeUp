import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchPage from './searchPage'
import CocktailPage from './cocktailPage'

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/cocktail/:name" element={<CocktailPage />} />
                <Route path="*" element={<p className="text-center mt-10">Page not found</p>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App