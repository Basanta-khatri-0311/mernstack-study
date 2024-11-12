import Header from './components/Header'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { useContext } from 'react'
import { UserData } from './context/UserContext'


function App() {
  const data =useContext(UserData)

  return (
    <>
      <Header />
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes> */}
      <Footer /> 

      this is the app
    </>
  )
}

export default App
