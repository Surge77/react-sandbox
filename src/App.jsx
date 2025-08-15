import './App.css'
import  Counter  from "./projects/Counter-App/Counter"
import Calculator from "./projects/Calculator/Calculator"

// This is the root component of the app =>
// What it does?
// Holds all your app’s structure and logic.
// Renders other components, routes, or UI elements.
// All your projects/pages/components eventually get rendered inside App.


const App = () => {

  return (
    <div>
      <Counter/>
      <Calculator/>
    </div>
  )
}

export default App
