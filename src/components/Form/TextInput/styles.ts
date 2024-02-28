import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.button};
  background-color: ${({ theme }) => theme.input};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.yellowDark};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.button};
  }

  input {
    color: ${({ theme }) => theme.text};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0.75rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.label};
    }
  }

  span {
    color: ${({ theme }) => theme.label};
    padding-right: 0.75rem;
    ${mixins.fonts.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
