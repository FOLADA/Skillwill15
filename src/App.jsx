import { useEffect, useState } from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowResize from './hooks/useWindowResize';

function App() {
  const [theme, setTheme] = useLocalStorage("theme", true);
  const [color, setColor] = useState(theme ? 'black' : 'white');
  const { width, height } = useWindowResize();

  const toggleTheme = () => {
    if (width > 576) { 
      setTheme((prevState) => !prevState);
      setColor(theme ? 'white' : 'black');
      console.log("Works on the Desktop")
    } else {
      console.log("Doesn't work on the Mobile (DZLIVS GAVAKETEEEEEEEEEEEEE)");
    }
  };

  return (
    <div className="main-div" style={{ backgroundColor: color }}>
      <button 
        onClick={toggleTheme}
        style={{ backgroundColor: theme ? 'white' : 'black', color: theme ? 'black' : 'white' }}
        className='btn'>
        Toggle Theme
      </button>

      <div style={{ height: '3000px', color: theme ? 'white' : 'black' }}>
        helper div (Window size: {width} x {height})
      </div>
    </div>
  );
}

export default App;
