import { useState } from 'react'


//The main component name should always start with a capital letter
const Counter = () => {

  const [count,setCount] = useState(0);

  const increment = () => setCount(count + 1)

  // The return inside a React component is only meant for JSX — the visual structure of your UI.
  // any logic, functions, variable declarations, hooks, or event handler definitions should be outside the return (...) block.
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
    
  )
}

export default Counter;


// {} in JSX = “switch to JavaScript mode.”
//  anything inside {} is treated as JavaScript and gets evaluated before being rendered.
// So if you want to print (render) a variable, expression, or even the result of a function, you wrap it in curly braces.

// Works for:

// Variables ({count})

// Expressions ({age + 1})

// Function calls ({getUserName()})

// Conditional rendering ({isLoggedIn ? 'Welcome' : 'Please log in'})