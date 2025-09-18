import mojitoImg from './assets/img/mojito.png';

function CocktailPage(){
    return(
            <main className="grid grid-cols-[4fr_1fr_7fr] h-[calc(100vh-100px)] overflow-hidden">
                <div className="flex flex-col gap-5 col-start-1 col-span-1 ml-5 mb-9 justify-end font-[CabinetGrotesk] text-xl tracking-wider">
                    <ul>
                        <li>2-3 oz Light rum</li>
                        <li>Juice of 1 Lime</li>
                        <li>2 tsp Sugar</li>
                        <li>2-4 Mint</li>
                        <li>Soda water</li>
                    </ul>
                    <p>Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.</p>
                </div>
                <div className="col-start-3 h-full overflow-hidden">
                    <img src={mojitoImg} alt="cocktail image" className="w-full h-auto max-h-[calc(100vh-100px)] object-cover"/>
                </div>
            </main>
    )
}

export default CocktailPage