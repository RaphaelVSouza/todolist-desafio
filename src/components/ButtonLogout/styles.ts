import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    display: block;
    background-color: ${theme.colors.logout};
    color: ${theme.colors.white};
    text-align: center;
    transition: 0.3s ease-in-out;
    border: 0;
    border-radius: 6rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    width: fit-content;
    position: fixed;
    bottom: ${theme.spacings.small};
    right: ${theme.spacings.small};


    &:hover {
      background-color: ${theme.colors.logoutHover};
      cursor: pointer;
    }
  `}
`;