import './App.css'
import {Todo} from "./projects/Todo_list/Todo.jsx";

// This is the root component of the app =>
// What it does?
// Holds all your app’s structure and logic.
// Renders other components, routes, or UI elements.
// All your projects/pages/components eventually get rendered inside App.


const App = () => {

  return (
    <div>
      <Todo/>
    </div>
  )
}

export default App
