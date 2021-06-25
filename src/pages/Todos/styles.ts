import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    /* width: 100%;
    height: 100%;
    text-align: center; */
  `}

`

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.large};
    display: flex;
    padding: 18px 40px;
    background-color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    @media ${theme.media.mobile}{
      flex-direction: column;
    }
    @media ${theme.media.desktop} {

      justify-content: space-between;
    }
  `}
`;

export const TodosContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    padding: 0 2vw;
    @media ${theme.media.desktop} {
      padding: 0;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: 1000px;
    }
  `}
`;
