import './App.css'
import {ColorPicker} from "./projects/Color_picker/ColorPicker.jsx";

// This is the root component of the app =>
// What it does?
// Holds all your app’s structure and logic.
// Renders other components, routes, or UI elements.
// All your projects/pages/components eventually get rendered inside App.


const App = () => {

  return (
    <div>
      <ColorPicker/>
    </div>
  )
}

export default App
