import styled from 'styled-components';

export const ReviewWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.rose};
  width: 100%;
  height: 229px;
  padding: 24px;
  border-radius: 24px;
  @media (min-width: ${p => p.theme.media.s}) {
    /* width: 400px; */
  }
  @media (min-width: ${p => p.theme.media.m}) {
    width: 596px;
    height: 220px;
    gap: 40px;
    padding: 48px;
  }
`;
