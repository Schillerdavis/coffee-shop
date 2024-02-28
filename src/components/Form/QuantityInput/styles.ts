import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.button};
  border-radius: 0.375rem;

  display: flex;
  gap: 0.25rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${({ theme }) => theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.purpleDark};
    }
  }

  span {
    padding-top: 0.125rem;
    color: ${({ theme }) => theme.title};
  }
`
