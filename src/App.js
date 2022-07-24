import ComponentContainer from "./components/Container/Container/Container";
import React, { useState, useCallback } from 'react';
import { Container} from 'semantic-ui-react';
import './components/styles/App.css';
import useLocalStorage from "./components/Hooks/UseLocalStorage";

function App() {
//checking if dark mode os enabled, adjusting color scheme, + storing val in local storage
  const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches
  const [theme, setTheme] = useLocalStorage('theme', isDark ? 'dark' : 'light');




  return (
    <Container data-theme={theme} id="app-container">
      <ComponentContainer />
    </Container>
  );
}

export default App;



