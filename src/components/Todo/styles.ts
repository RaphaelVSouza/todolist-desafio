import styled, { css } from 'styled-components'

type CompletedProps = {
  status: boolean
}

export const Wrapper = styled.div<CompletedProps>`
  ${(props) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    background-color: ${props.status ? props.theme.colors.success : props.theme.colors.gray};
    color: ${props.theme.colors.white};
    margin-bottom: ${props.theme.spacings.small};
    padding: ${props.theme.spacings.small} ${props.theme.spacings.xsmall};
    border-radius: 1rem;
    cursor: pointer;
    transition: opacity 0.2s;

    @media ${props.theme.media.desktop} {
      width: 40%;
      &:not(:nth-child(2n-2)){
        margin-right: 20px;
      }
    }
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    width: 100%;
  `}
`
