import Drinks from './components/drinks';
import './App.css'

function App() {


  return (
    <>
      <img src="https://assets.24g.com/public/2022-frontend-test-project/24g_logo.svg"/>
      <h1>24G Drinks Recipe Anthology</h1>

      <div className="mt-[100px] mb-[5rem] flex justify-self-center w-[60vw]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora iure minus deleniti soluta repudiandae beatae corrupti blanditiis illum cumque molestiae dolores totam modi ducimus, velit ipsum. Provident, magni perspiciatis!</p>
      </div>  
      
      <Drinks />
    </>
  )
}

export default App
