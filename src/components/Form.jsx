import {
  Button,
  ContactForm,
  ContainerForm,
  Input,
  InputWrap,
  Label,
  TextArea,
} from './Form.styled';

export const Form = () => {
  return (
    <ContainerForm>
      <ContactForm>
        <InputWrap>
          <Label htmlFor="name">Imię*</Label>
          <Input type="text" name="name" placeholder="Imię" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="email">E-mail*</Label>
          <Input type="email" name="email" placeholder="mail@gmail.com" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="message">Wiadomość</Label>
          <TextArea
            type="text"
            name="message"
            placeholder="Twoja wiadomość..."
          />
        </InputWrap>
        <Button type="submit">Wyślij</Button>
      </ContactForm>
    </ContainerForm>
  );
};
