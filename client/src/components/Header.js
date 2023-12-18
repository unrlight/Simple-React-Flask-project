import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css"
import { Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Header() {

  let[cartOpen, setCartOpen] = useState(false) /* Хуки */

  return ( 
    <nav className="nav">
    <header>
        <div>
            <span className='logo'>
              <img
              src='img/example.jpg'
              className='logoimage'
              />
              <Link to='/'>House staff</Link>
            </span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
              <li>
                <CustomLink to='/Res'>Полезные ресурсы</CustomLink >
              </li>
              <li>
                <CustomLink to='/Anket'>Анкета</CustomLink >
              </li>
            </ul>
            
            <FaShoppingCart onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />  

            {cartOpen && (
              <div className='shop-cart'>
                </div>
            )}

        </div>
        <div className='presentation'></div>
    </header>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
