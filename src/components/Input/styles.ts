import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        /* width: 100%;  */
        /* margin: ${theme.spacings.xsmall} 0; */
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        @media ${theme.media.mobile}{
          flex-direction: column;
        }
    `}
`;

export const Label = styled.label`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
        /* margin-bottom: ${theme.spacings.xsmall}; */
        margin-right: 10px;
        @media ${theme.media.mobile}{
          margin-bottom: 10px;
          margin-right: 0;
        }
    `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    height: 5rem;
    border-radius: 2rem;
    outline: 0;
    font-size: ${theme.font.sizes.small};
    padding:0 15px;
    @media ${theme.media.mobile}{
      margin-bottom: 20px;
    }
    @media ${theme.media.desktop} {
      width: 40rem;
      height: 4rem;
      border-radius: 1rem;
    }
  `}
`;