import {
  AboutText,
  AboutTitle,
  AboutUsSection,
  AboutWrapper,
} from './AboutUs.styled';
import { Card } from './Card';

export const AboutUs = () => {
  const cardsData = [
    {
      title: 'Kreatywne podejście i dbałość o szczegóły',
      description:
        'Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji balonowych, z dbałością o szczegóły',
      bgColor: '#ED4B5E',
    },
    {
      title: 'Materiały przyjazne dla środowiska',
      description:
        'Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy ślad na środowisku.',
      bgColor: '#222222',
    },
    {
      title: 'Szeroka gama kolorów do personalizacji',
      description:
        'Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować wystrój na każdą okazję.',
      bgColor: '#444444',
    },
    {
      title: 'Gwarancja dostawy i montażu',
      description:
        'Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż, zapewniając klientom kompleksową obsługę.',
      bgColor: '#808080',
    },
  ];
  return (
    <AboutUsSection>
      <AboutWrapper>
        <AboutTitle>Kreatywny zespół dekoratorów</AboutTitle>
        <AboutText>
          Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
          dekoracji na imprezy i wydarzenia
        </AboutText>
      </AboutWrapper>
      <ul>
        {cardsData.map((card, index) => (
          <li key={index}>
            <Card
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
            />
          </li>
        ))}
      </ul>
    </AboutUsSection>
  );
};
