import { Header } from './components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { GlobalStyle } from './components/GlobalStyle';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Reviews } from './components/Reviews';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Element name="main">
          <Header />
        </Element>
        <Hero />
        <Element name="about">
          <AboutUs />
        </Element>
        <Element name="reviews">
          <Reviews />
        </Element>
        <Element name="contacts">
          <Contacts />
        </Element>
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
