import './App.css'
import Count from "./projects/Character-count/Count.jsx";

// This is the root component of the app =>
// What it does?
// Holds all your app’s structure and logic.
// Renders other components, routes, or UI elements.
// All your projects/pages/components eventually get rendered inside App.


const App = () => {

  return (
    <div>
      <Count/>
    </div>
  )
}

export default App
