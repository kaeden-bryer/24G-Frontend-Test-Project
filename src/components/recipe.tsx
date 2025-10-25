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
        <div className="recipe-card bg-[#1f1f1f] p-[20px] rounded-[1em] w-[50vw]">
            <h1>{drink.name}</h1>

            <div className="ingredients">
                <h6 className="font-bold">Ingredients</h6>
                <ul className="list-disc pl-[3rem]">
                    {drink.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <hr/>
            <div className="preparation">
                <h6 className="font-bold">How to prepare</h6>

                <div>Figure out how to add steps and format accordingly</div>
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
    )
}
export default Recipe;