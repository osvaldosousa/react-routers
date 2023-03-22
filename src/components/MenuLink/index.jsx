import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

function MenuLink({ text, path }) {
  const pagesLocation = useLocation()

  return (
    <Link
      className={`
        ${styles.link}
        ${pagesLocation.pathname === path ? styles.linkOpen : ''}
      `}
      to={path}
    >
      {text}
    </Link>
  )
}

export default MenuLink
