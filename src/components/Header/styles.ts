import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.header`
  max-width: 72.5rem;
  padding: 2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img#logo {
    height: 2.5rem;
  }
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    line-height: 100%;

    background-color: ${({ theme }) => theme.purpleLight};

    > svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${({ theme }) => theme.purple};
    }

    span {
      color: ${({ theme }) => theme.purpleDark};
    }

    padding: 0.625rem 0.5rem;
    border-radius: 0.375rem;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.yellowLight};
    color: ${({ theme }) => theme.yellowDark};

    padding: 0.5rem 0.625rem;
    border-radius: 0.375rem;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    > svg {
      width: 1.375rem;
      height: 1.375rem;
    }

    span {
      ${mixins.fonts.buttonM};
      font-weight: bold;
      line-height: 0;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.yellowDark};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
