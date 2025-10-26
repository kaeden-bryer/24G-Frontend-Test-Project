import Drinks from './components/drinks';
import { useState } from 'react';
import './App.css'
import Recipe from './components/recipe';
import type { Drink } from './interfaces/Drink';

function App() {
  const [showRecipe, setShowRecipe] = useState(false)
  const [drink, setDrink] = useState<Drink | null>(null);

  const setCurrentDrink = (drink: any) => {
    setDrink(drink);
    setShowRecipe(true);
  }

  return (
    <>
      <img className="mt-[40px] ml-[40px]" src="https://assets.24g.com/public/2022-frontend-test-project/24g_logo.svg"/>
      <h1 className="mt-[100px]">Holiday Drinks Anthology</h1>

      <div className="mt-[100px] mb-[5rem] flex flex-col justify-self-center w-[40vw] text-center text-[1.2rem]">
        <p>Welcome to the 24G Holiday Drinks Anthology! Enjoy our curated collection of boozy drinks, handcrafted and selected by the 24G bar</p>
        <br />
        <p>Developed by (hopeful) future intern, Kaeden Bryer💝</p>
      </div>

      {showRecipe && drink && (
        <div
          className="fixed inset-0 z-[10] flex items-center justify-center bg-black/60"
          onClick={() => setShowRecipe(false)}
        >
          <img 
            src="https://assets.24g.com/public/2022-frontend-test-project/exit_icon.svg" 
            className="absolute w-[30px] h-[30px] top-[4%] right-[12%] lg:top-[10%] lg:right-[10%] cursor-pointer" 
          />
          <div onClick={(e) => e.stopPropagation()}>
            <Recipe showRecipe={true} drink={drink} />
          </div>
        </div>
      )}
      
      <Drinks setCurrentDrink={setCurrentDrink}/>
    </>
  )
}

export default App
