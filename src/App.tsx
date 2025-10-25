import Drinks from './components/drinks';
import { useState } from 'react';
import './App.css'
import Recipe from './components/recipe';
import type { Drink } from './interfaces/Drink';

function App() {
  const [showRecipe, setShowRecipe] = useState(false)
  const [drink, setDrink] = useState<Drink | null>(null);

  // fix this later to be more elegant
  const handleDataFromChild = (drink: any) => {
    setDrink(drink);
    setShowRecipe(true);
  }

  return (
    <div className="App relative">
      <img src="https://assets.24g.com/public/2022-frontend-test-project/24g_logo.svg"/>
      
      <h1 className="mt-[100px]">Drinks Recipe Anthology</h1>

      <div className="mt-[100px] mb-[5rem] flex justify-self-center w-[60vw] text-center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora iure minus deleniti soluta repudiandae beatae corrupti blanditiis illum cumque molestiae dolores totam modi ducimus, velit ipsum. Provident, magni perspiciatis!</p>
      </div>  

      <div className="flex justify-self-center absolute top-[30vh] z-[10]">
          {drink && <Recipe showRecipe={showRecipe} closeRecipe={()=>setShowRecipe(false)} drink={drink}/>}
      </div>
      
      <Drinks sendDataToParent={handleDataFromChild}/>
    </div>
  )
}

export default App
