import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function MyComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <div>The theme is set to {theme} mode</div>;
}

function ToggleButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle theme</button>;
}

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <MyComponent />
      <ToggleButton />
    </ThemeContext.Provider>
  );
}
export default App;
