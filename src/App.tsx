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
      
      <h1 className="mt-[100px]">Drinks Recipe Anthology</h1>

      <div className="mt-[100px] mb-[5rem] flex justify-self-center w-[40vw] text-center text-[1.2rem]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora iure minus deleniti soluta repudiandae beatae corrupti blanditiis illum cumque molestiae dolores totam modi ducimus, velit ipsum. Provident, magni perspiciatis!</p>
      </div>  

      {showRecipe && drink && (
        <div
          className="fixed inset-0 z-[10] flex items-center justify-center bg-black/60"
          onClick={() => setShowRecipe(false)}
        >
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
