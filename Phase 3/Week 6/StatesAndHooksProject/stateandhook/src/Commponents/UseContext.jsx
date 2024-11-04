import { createContext, useContext } from "react";


// Create the context
const ThemeContext = createContext(null);

function useContext() {
  // Use the context value
  const theme = useContext(ThemeContext);

  return (
    <div>
      {/* <p>The current theme is {theme}</p> */}
      <ThemeContext.Provider value={{ theme }}>
        
      </ThemeContext.Provider>
    </div>
  );
}

export default useContext;
