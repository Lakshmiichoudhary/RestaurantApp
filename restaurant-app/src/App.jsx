import './App.css'
import Meals from './Components/Body/Meals'
import Header from './components/header/Header'
import Cart from './Components/Cart/Cart'

function App() {
  return (
    <>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  )
}

export default App
