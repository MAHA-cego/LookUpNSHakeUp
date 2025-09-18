function Nav(){
    return(
            <header className="grid grid-cols-[3fr_7fr_2fr] grid-rows-1 border-b h-25 items-center">
                <div className="col-start-1 col-span-1 border-r h-full flex items-center justify-center">
                    <h1 className="font-[PPGoshaSans-Regular] text-6xl tracking-wider">MOJITO</h1>
                </div>
                <div className="col-start-2"/>
                <div className="col-start-3 col-span-1 border-l h-full flex items-center justify-center">
                    <button className="font-[PPGoshaSans-Regular] text-2xl tracking-wide
                    h-full w-full cursor-pointer">New search</button>
                </div>
            </header>
    )
}

export default Nav