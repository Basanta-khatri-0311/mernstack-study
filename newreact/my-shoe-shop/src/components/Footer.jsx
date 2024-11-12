import React, { useContext } from 'react'
import { UserData } from '../context/UserContext'

const Footer = () => {
  const userCity =  useContext(UserData)
  return (
    <footer>
      <h1>footer for city {userCity.city}</h1>
    </footer>
  )
}

export default Footer
