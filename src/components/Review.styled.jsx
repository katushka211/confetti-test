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
