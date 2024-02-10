import { Header } from './components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { GlobalStyle } from './components/GlobalStyle';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Reviews } from './components/Reviews';
import { Contacts } from './components/Contacts';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <AboutUs />
        <Reviews />
        <Contacts />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
