import { useState } from "react";

export const ColorPicker = () => {
    // FPT: Start with a valid hex color that both input and CSS understand
    const [color, setColor] = useState("#ff0000"); // red in hex

    function handleChange(e) {
        const newColor = e.target.value; // Already in hex format from color input
        setColor(newColor);
    }

    return (
        <div style={{
            height: "100vw",
            background: color,
            textAlign: "center",
            paddingTop: "2rem",
        }}>
            <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                Simple color picker
            </h2>
            <input
                onChange={handleChange}
                value={color}
                type="color"
            />
            <p style={{ color: "white", marginTop: "1rem" }}>
                Current color: {color}
            </p>
        </div>
    );
};
