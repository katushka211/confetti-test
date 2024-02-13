import styled from 'styled-components';

export const ContainerForm = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 36px;
  @media (min-width: ${p => p.theme.media.m}) {
    margin-top: 80px;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  padding: 51px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #ffeff0;
  border-radius: 24px;

  @media (min-width: ${p => p.theme.media.s}) {
    width: 480px;
  }
  @media (min-width: ${p => p.theme.media.m}) {
    width: 608px;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #949494;
  font-family: 'Inter';
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.16px;
  margin-left: 24px;
`;

export const Input = styled.input`
  padding: 20px 24px;
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  border-radius: 9px;
  border: 1px solid #d2d2d2;
  background: #fff;
  color: ${props => (props.$hasError ? 'red' : 'initial')};
  &::placeholder {
    color: #888;
  }
`;

export const TextArea = styled.textarea`
  height: 128px;
  padding: 20px 24px;
  resize: none;
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  border-radius: 9px;
  border: 1px solid #d2d2d2;
  background: #fff;
  resize:non &::placeholder {
    color: #888;
  }
  @media (min-width: ${p => p.theme.media.m}) {
    height: 136px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 24px 32px;
  border-radius: 24px;
  background-color: ${p => p.theme.colors.accent};
  color: #fff;
  font-family: 'Anzeigen';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: uppercase;
  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 40px;
    letter-spacing: -0.4px;
  }
`;
