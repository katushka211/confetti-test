import { ContactForm, ContainerForm } from './Form.styled';

export const Form = () => {
  return (
    <ContainerForm>
      <ContactForm>
        <div>
          <label>
            <input type="text" name="name" placeholder="Imię" />
          </label>
        </div>
        <div>
          <label>
            E-mail*
            <input type="email" name="email" placeholder="mail@gmail.com" />
          </label>
        </div>
        <div>
          <label>
            Wiadomość
            <input
              type="text"
              name="message"
              placeholder="Twoja wiadomość..."
            />
          </label>
        </div>
      </ContactForm>
    </ContainerForm>
  );
};
