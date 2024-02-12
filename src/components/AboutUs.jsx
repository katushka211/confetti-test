import {
  AboutText,
  AboutTitle,
  AboutUsSection,
  AboutWrapper,
  CardsList,
  Container,
} from './AboutUs.styled';
// import { Card } from './Card';
// import cardsData from '../utils/cardsData.json';
import { AboutSlider } from './AboutSlider';
// import { AboutSlider } from './AboutSlider';

export const AboutUs = () => {
  return (
    <AboutUsSection>
      <Container>
        <AboutWrapper>
          <AboutTitle>Kreatywny zespół dekoratorów</AboutTitle>
          <AboutText>
            Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
            dekoracji na imprezy i wydarzenia
          </AboutText>
        </AboutWrapper>
        <CardsList>
          {/* {cardsData.map((card, index) => (
            <Card
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
              paddingRight={card.paddingRight}
              key={index}
            />
          ))} */}
        </CardsList>
      </Container>
      <AboutSlider />
    </AboutUsSection>
  );
};

// const cardsData = [
//   {
//     title: 'Kreatywne podejście i dbałość o szczegóły',
//     description:
//       'Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji balonowych, z dbałością o szczegóły',
//     bgColor: '#ED4B5E',
//     paddingRight: '50px',
//   },
//   {
//     title: 'Materiały przyjazne dla środowiska',
//     description:
//       'Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne materiały balonowe,  aby pozostawić jak najmniejszy ślad na środowisku.',
//     bgColor: '#222222',
//     paddingRight: '35px',
//   },
//   {
//     title: 'Szeroka gama kolorów do personalizacji',
//     description:
//       'Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować wystrój na każdą okazję.',
//     bgColor: '#444444',
//     paddingRight: '35px',
//   },
//   {
//     title: 'Gwarancja dostawy i montażu',
//     description:
//       'Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż, zapewniając klientom kompleksową obsługę.',
//     bgColor: '#808080',
//     paddingRight: '10px',
//   },
// ];
