import {useState} from "react";

const Count = () => {
    // Initialize state to store the input text as an empty string
    const [text, setText] = useState('')

    // Event handler function that runs every time the input value changes
    const handleInputChange = (e) => {
        // Extract the current value from the input field and update state
        // e.target refers to the input element, e.target.value is the text inside it
        setText(e.target.value)
    }

    return (
        <div>
            {/* Label to describe what the input field is for */}
            <label>Enter your text: </label>

            {/* Controlled input field with inline styling */}
            <input
                style={{
                    border: '2px solid white',      // White border, 2px thick
                    backgroundColor: 'transparent', // See-through background
                }}
                onChange={handleInputChange}        // Triggers handleInputChange on every keystroke
            />

            {/* Button displaying the character count */}
            {/* text.length calculates number of characters in the current text */}
            <button>{text.length}</button>
        </div>
    )
}

export default Count
