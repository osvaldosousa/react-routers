import styles from './Button.module.css'

function Button({children}) {
  return (
    <button className={styles.buttonMain}>{children}</button>
  )
}

export default Button
