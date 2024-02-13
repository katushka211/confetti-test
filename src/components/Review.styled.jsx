import styled from 'styled-components';

export const ReviewWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.rose};
  height: 229px;
  padding: 24px;
  border-radius: 24px;

  @media (min-width: ${p => p.theme.media.m}) {
    height: 220px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    height: 277px;
    padding: 36px 24px;
  }
`;

export const ReviewText = styled.p`
  color: ${p => p.theme.colors.main};
  font-family: 'Inter';
  font-size: 18px;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: -0.18px;
  @media (min-width: ${p => p.theme.media.l}) {
    font-size: 24px;
    letter-spacing: -0.24px;
  }
`;

export const ReviewAuthor = styled.p`
  color: #565148;
  font-family: 'Inter';
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.16px;
`;

export const ReviewAuthorWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
