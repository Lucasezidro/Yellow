import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home/Home';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom'
import useThemeState from './hooks/useThemeState'
import dark from './styles/themes/dark'
import light from './styles/themes/light'


function App() {
  const [theme, setTheme] = useThemeState("theme", dark);

    const toggleTheme = () => {
      setTheme(theme.title === "dark" ? light : dark);
    }

  return (
    <Routes>
      <ThemeProvider theme={theme}>
          <Route path="/" element={<Home toggleTheme={toggleTheme}/>} />
          <GlobalStyle />
      </ThemeProvider>
    </Routes>
  );
}

export default App;
