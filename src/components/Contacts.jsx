import { Title } from './Reviews.styled';
import sprite from '../images/svg/symbol-defs.svg';
import {
  ContactsLink,
  ContactsSection,
  ContactsText,
  ContactsWrap,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactsSection>
      <Title>Kontakty</Title>
      <ContactsText>Confetti - Studio Dekoracij Balonami Warszawa</ContactsText>
      <ContactsWrap>
        <ContactsLink href="tel:+48793351407">
          <svg width={24} height={24}>
            <use href={sprite + `#call`} />
          </svg>
          +48 793 351 407
        </ContactsLink>
        <ContactsLink href="mailto:confettibalony@gmail.com">
          <svg width={24} height={24}>
            <use href={sprite + `#sms`} />
          </svg>
          confettibalony@gmail.com
        </ContactsLink>
      </ContactsWrap>
    </ContactsSection>
  );
};
