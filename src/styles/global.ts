import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'
import { CoffeeList, Heading, HeroContent } from '../pages/Home/styles'
import { Container } from '../pages/Cart/styles'
import { ContainerSuccess } from '../pages/Success/styles'

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
    min-width: 330px;
  }

  body, input, textarea, button {
    ${mixins.fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }

  @media (max-width: 1177px) {
    ${CoffeeList} {
      max-width: 54.5rem;
    }
    
    ${CoffeeList} > div {
      grid-template-columns: 1fr 1fr 1fr;
    }
    ${HeroContent} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
    ${Heading} > h1 {
      max-width: 41rem;
    }

    > div {
      gap: 1rem;
    }
    }
    ${Container} {
      flex-direction: column;
      max-width: 40rem;
    }
    ${ContainerSuccess} {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 889px) {
    ${CoffeeList} {
      max-width: 36.5rem;
    }

    ${CoffeeList} > div {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 685px) {
    html {
      font-size: 12px;
    }
  }

  @media (max-width: 519px) {
    html {
      font-size: 9.5px;
    }
  }

  


`
