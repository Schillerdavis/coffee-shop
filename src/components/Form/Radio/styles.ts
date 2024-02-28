import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Container = styled.label`
  padding: 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  ${mixins.fonts.tag};
  transition: all 0.2s;

  > span {
    line-height: 100%;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.hover};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.purpleLight};
    border-color: ${({ theme }) => theme.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`
