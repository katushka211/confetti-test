import { ContactForm, ContainerForm, InputWrap } from './Form.styled';

export const Form = () => {
  return (
    <ContainerForm>
      <ContactForm>
        <InputWrap>
          <label htmlFor="name">Imię*</label>
          <input type="text" name="name" placeholder="Imię" />
        </InputWrap>
        <InputWrap>
          <label htmlFor="email">E-mail*</label>
          <input type="email" name="email" placeholder="mail@gmail.com" />
        </InputWrap>
        <InputWrap>
          <label htmlFor="message">Wiadomość</label>
          <textarea
            type="text"
            name="message"
            placeholder="Twoja wiadomość..."
          />
        </InputWrap>
      </ContactForm>
    </ContainerForm>
  );
};
