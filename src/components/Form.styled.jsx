import styled from 'styled-components';

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
export const ContainerForm = styled.div`
  width: 100%;
`;
