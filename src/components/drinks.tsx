import drinks from '../data/drinks.json';

interface DrinksProps {
    setCurrentDrink: (drink: any) => void; // Replace 'any' with the correct type if available
}

function Drinks({ setCurrentDrink }: DrinksProps) {
    const passDrinkToParent = (drink: any) => {
        setCurrentDrink(drink);
    }

    return (
        <>
            <div className="text-white flex flex-row flex-wrap w-[70vw] justify-self-center justify-center">
                {drinks.drinks.map((drink: any) => (
                <div key={drink.name} onClick={() => passDrinkToParent(drink)} className="w-[22%] card relative h-[17vw] ml-[8px] mr-[8px]">
                    <img className="card-front absolute" src={drink.images.front}></img>
                    <img className="card-back absolute" src={drink.images.back}></img>
                </div>
                ))}
            </div>
        </>
    )
}
export default Drinks