import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  position: relative;

  img#bg-coffee {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    object-fit: cover;
  }
  img#coffee {
    width: 29.75rem;
  }
`

export const HeroContent = styled.div`
  max-width: 72.5rem;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.title}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.subtitle}
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      width: 2rem;
      height: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`

export const CoffeeList = styled.section`
  max-width: 72.5rem;
  padding: 2rem 1.25rem 9.375rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.subtitle}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`
