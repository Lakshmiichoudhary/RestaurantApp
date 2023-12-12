import {useState} from 'react'
import Header from './Components/Header/Header'
import Meals from './Components/Body/Meals'
import Cart from './Components/Cart/Cart'
import CartProvider from './Context/CartProvider'

function App() {
  const [openCart,setOpenCart] = useState(false)
 
  const CartHandler = () => {
    setOpenCart(true)
  }

  const CloseHandler = () => {
    setOpenCart(false)
  }

  return (
    <CartProvider>
      {openCart && <Cart onClose={CloseHandler}/>}
      <Header onOpenCart={CartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}

export default App
