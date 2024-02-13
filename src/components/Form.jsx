import { useState } from 'react';
import {
  Button,
  ContactForm,
  ContainerForm,
  Input,
  InputWrap,
  Label,
  TextArea,
} from './Form.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const nameRegex = /^[\p{L}\s.'-]+$/u;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleNameChange = event => {
    const newName = event.target.value;
    setName(newName);

    if (!newName || !nameRegex.test(newName)) {
      setNameError('Nieprawidłowe Іmię');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = event => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!newEmail || !emailRegex.test(newEmail)) {
      setEmailError('Nieprawidłowy email');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = event => {
    const newMessage = event.target.value;
    setMessage(newMessage);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name || !email || nameError || emailError) {
      setNameError('Imię wymagane');
      setEmailError('E-mail wymagany');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');

    toast.success('Zrobione', {
      position: 'top-center',
    });
  };

  return (
    <ContainerForm>
      <ContactForm onSubmit={handleSubmit}>
        <InputWrap $hasError={!!nameError}>
          <Label htmlFor="name" error={nameError}>
            Imię*
          </Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Imię"
            $hasError={!!nameError}
          />
          {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
        </InputWrap>
        <InputWrap $hasError={!!emailError}>
          <Label htmlFor="email" error={emailError}>
            E-mail*
          </Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="mail@gmail.com"
            $hasError={!!emailError}
          />
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        </InputWrap>
        <InputWrap>
          <Label htmlFor="message">Wiadomość</Label>
          <TextArea
            type="text"
            name="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Twoja wiadomość..."
          />
        </InputWrap>
        <Button type="submit" disabled={nameError || emailError}>
          Wyślij
        </Button>
      </ContactForm>
      <ToastContainer position="top-center" />
    </ContainerForm>
  );
};
