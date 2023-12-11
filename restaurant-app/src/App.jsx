import './App.css'
import Meals from './Components/Body/Meals'
import Header from './components/header/Header'
import Cart from './Components/Cart/Cart'
import {useState} from 'react'

function App() {
  const [openCart,setOpenCart] = useState(false)
 
  const CartHandler = () => {
    setOpenCart(true)
  }

  const CloseHandler = () => {
    setOpenCart(false)
  }

  return (
    <>
      {openCart && <Cart onClose={CloseHandler}/>}
      <Header onOpenCart={CartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  )
}

export default App
