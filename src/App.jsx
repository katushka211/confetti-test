import { Header } from './components/Header';
// import { Container } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { GlobalStyle } from './components/GlobalStyle';
import { Hero } from './components/Hero';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
