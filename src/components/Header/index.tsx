import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { Aside, Container } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  const { cart } = useCart()
  return (
    <Container>
      <Link to="/">
        <img src={'../../logo.svg'} id="logo" alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin /* size={22} */ weight="fill" />
          <span>Sorocaba, SP</span>
        </div>

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart /* size={22} */ weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}
