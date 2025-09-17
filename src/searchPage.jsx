function SearchPage(){

    return(
       <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-24 border justify-center items-center w-4/5 h-[70%]">
            <h1 className="font-[PPGoshaSans-Regular] text-6xl tracking-wider">Look up n' shake up</h1>
            <form className="flex flex-col items-center gap-12" action="" method="get" id="fomrCocktail">
                <input className="font-[CabinetGrotesk] text-2xl tracking-wider text-center border-none focus:outline-none focus:ring-0" type="text" name="cocktail" placeholder="How do you make a..." autoComplete="off"/>
                <input className="font-[PPGoshaSans-Regular] text-4xl tracking-wider text-center cursor-pointer" type="submit" value="search" />
            </form>
        </div>
       </div>
    )
}

export default SearchPage