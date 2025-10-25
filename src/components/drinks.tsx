import drinks from '../data/drinks.json';

function Drinks() {
    function turnBlue() {
        // use this to test clicking later
    }

    return (
        <>
            <div className="text-white flex flex-row flex-wrap w-[80vw] justify-self-center justify-center">
                {drinks.drinks.map((drink: any) => (
                <div key={drink.name} className="w-[22%] card relative h-[20vw] ml-[8px] mr-[8px]">
                    <img className="card-front absolute" src={drink.images.front}></img>
                    <img className="card-back absolute" src={drink.images.back}></img>
                </div>
                ))}
            </div>
        </>
    )
}
export default Drinks