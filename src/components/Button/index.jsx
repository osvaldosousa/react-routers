import styles from './Button.module.css'

function Button({children, stylesMod}) {
  return (
    <button 
      className={`${styles.buttonMain} ${styles[stylesMod]}`}

    >{children}</button>
  )
}

export default Button
