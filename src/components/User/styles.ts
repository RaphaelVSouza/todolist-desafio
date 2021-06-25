import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled(Link)`
${({ theme }) => css`
    width: 40rem;
    /* height: ${theme.spacings.large}; */
    text-align: center;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: 24px;
    margin-bottom: ${theme.spacings.small};
    padding: 10px;
    border-radius: 1rem;
    text-decoration: none;

    @media ${theme.media.desktop} {
      width: 40%;
    }


    `}

    &:hover {
        ${({ theme }) => css`
        background-color: ${theme.colors.primaryHover};
        `}
    }
`
