import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 14px;
`

export const Title = styled.h1`
${({ theme }) => css`
  margin-bottom: ${theme.spacings.small};
`}
`
