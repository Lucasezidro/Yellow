import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home/Home';
import { ThemeProvider } from 'styled-components';
import useThemeState from './hooks/useThemeState'
import dark from './styles/themes/dark'
import light from './styles/themes/light'


function App() {
  const [theme, setTheme] = useThemeState("theme", dark);

    const toggleTheme = () => {
      setTheme(theme.title === "dark" ? light : dark);
    }

  return (
    <ThemeProvider theme={theme}>
    <div>
      
      <Home toggleTheme={toggleTheme}/>
      <GlobalStyle />
    </div>
    </ThemeProvider>
  );
}

export default App;
