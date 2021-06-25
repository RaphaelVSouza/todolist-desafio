import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    width: 100%;
    text-align: center;
    transition: 0.3s ease-in-out;
    border: 0;
    border-radius: 3rem;
    font-size: 18px;
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall} 0;

    @media ${theme.media.desktop} {
      width: fit-content;
      padding: 9px 32px;
      font-size: 18px;
      height: 54px;

    }

    &:hover {
      background-color: ${theme.colors.primaryHover};
      cursor: pointer;
    }
  `}
`;