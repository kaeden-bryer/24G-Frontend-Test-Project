import React from "react";
import type { Drink } from '../interfaces/Drink.ts';

interface RecipeProps {
    showRecipe: boolean;
    children?: React.ReactNode;
    drink: Drink;
}

function Recipe({showRecipe, drink}: RecipeProps){
    if (!showRecipe) {return null}
    return (
        <div className="recipe-card bg-[#1f1f1f] p-[20px] rounded-[1em] w-[90vw] h-[80vh] md:w-[70vw] md:h-[80vh] lg:w-[50vw] overflow-hidden flex flex-col">
            <h1 className="block w-full text-center text-2xl md:text-4xl mt-[1rem] mb-[1rem]">{drink.name}</h1>

            <div className="flex-1 min-h-0 overflow-auto p-[2rem]">
                <div className="ingredients">
                    <h6 className="font-bold">Ingredients</h6>
                    <ul className="list-[circle] pl-[1rem]">
                        {drink.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <hr/>
                <div className="preparation">
                    <h6 className="font-bold">How to prepare</h6>

                    <ul className="ordered-steps">
                        {drink.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>
                <hr/>
                <div className="mocktail">
                    <h6 className="font-bold">Make it a mocktail</h6>
                    <p>{drink.mocktail}</p>
                </div>
                <hr/>
                <div className="glass-recommendation">
                    <h6 className="font-bold">Glass Recommendation</h6>
                    <p>{drink.glassware}</p>
                </div>
            </div>
        </div>
    )
}
export default Recipe;