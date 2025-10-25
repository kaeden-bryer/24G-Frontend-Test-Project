import React from "react";
import type { Drink } from '../interfaces/Drink.ts';

interface RecipeProps {
    showRecipe: boolean;
    closeRecipe: () => void;
    children?: React.ReactNode;
    drink: Drink;
}

function Recipe({showRecipe, closeRecipe, drink}: RecipeProps){
    if (!showRecipe) {return null}
    return (
        <div className="recipe-card bg-gray-800 p-[20px] rounded-[1em]">
            <button onClick={closeRecipe}>close</button>

            <h1>{drink.name}</h1>

            <div className="ingredients">
                <h6>Ingredients</h6>
                <ul>
                    {drink.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <hr/>
            <div className="preparation">
                <h6>How to prepare</h6>

                <div>Figure out how to add steps and format accordingly</div>
            </div>
            <hr/>
            <div className="mocktail">
                <h6>Make it a mocktail</h6>
                <p>{drink.mocktail}</p>
            </div>
            <hr/>
            <div className="glass-recommendation">
                <h6>Glass Recommendation</h6>
                <p>{drink.glassware}</p>
            </div>
        </div>
    )
}
export default Recipe;