import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function CocktailPage(){
    const { name } = useParams();
    const navigate = useNavigate();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);


        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
            if(!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then((data) => {
            if (!data.drinks || data.drinks.length === 0) {
                throw new Error('No drinks found');
            }
            setCocktail(data.drinks[0]);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [name]);

    if (loading) return (
    <div className="flex items-center justify-center h-screen">
        <p className="text-l text-center font-[PPGoshaSans-Regular]">Loading...</p>
    </div>);
    if (error) return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
        <p className="text-l text-center font-[PPGoshaSans-Regular]">Error: {error}</p>
        <button className="text-l text-center font-[PPGoshaSans-Regular] p-2 border cursor-pointer" onClick={() => navigate("/")}>Go back</button>
    </div>)
    if (!cocktail) return null;

    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(measure ? `${measure.trim()} ${ingredient.trim()}` : ingredient.trim())
        }
    }

    return(
            <div>
                <header className="flex flex-row justify-between sm:grid grid-cols-[3fr_7fr_2fr] grid-rows-1 border-b h-15 sm:h-25 items-center">
                <div className="col-start-1 col-span-1 sm:border-r h-full flex items-center justify-center ml-4">
                    <h1 className="font-[PPGoshaSans-Regular] text-2xl sm:tetx-4xl lg:text-5xl 2xl:text-6xl tracking-wider">{cocktail.strDrink}</h1>
                </div>
                <div className="col-start-2"/>
                <div className="col-start-3 col-span-1 border-l h-full flex items-center justify-center">
                    <button className="font-[PPGoshaSans-Regular] text-l lg:text-xl 2xl:text-2xl tracking-wide
                    h-full w-full cursor-pointer px-5" onClick={() => navigate("/")}>New search</button>
                </div>
            </header>
                <main className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-[4fr_1fr_7fr] sm:h-[calc(100vh-100px)] overflow-hidden">
                    <div className="flex flex-col gap-5 row-start-2 pr-5 mt-5 sm:mt-0 sm:pr-0 sm:row-start-1 sm:col-start-1 sm:col-span-1 ml-5 mb-9 sm:justify-end font-[CabinetGrotesk] sm:text-l xl:text-xl tracking-wider">
                        <ul>
                            {ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p>{cocktail.strInstructions}</p>
                    </div>
                    <div className="sm:col-start-3 h-full overflow-hidden border-b sm:border-b-0 sm:border-l">
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-full object-cover"/>
                    </div>
                </main>
            </div>
    )
}

export default CocktailPage