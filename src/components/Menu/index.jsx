import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../MenuLink'
import styles from './Menu.module.css'

function Menu() {
  return (
    <header>
      <nav className={styles.headerNav}>
        <MenuLink 
          path={'/'}
          text="Inicío" 
        />
        
        <MenuLink 
          path={'/about-me'} 
          text="Sobre Mim" 
        />
      </nav>
    </header>
  )
}

export default Menu
