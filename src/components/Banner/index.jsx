import styles from './Banner.module.css'
import circle from 'src/assets/circle-gradient.png'
import perfil from 'src/assets/perfil.jpg'

function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.title}>Olá, Mundo 😎</h1>
        <p className={styles.paragraph}>
          Sou um desenvolvedor web com um ano de experiência em programação e
          atualmente estou estudando o React.js. Meus projetos de front-end
          podem ser encontrados no meu github.
        </p>
      </div>

      <div className={styles.images}>
        <img className={styles.circle} src={circle} aria-hidden={true} />
        <img className={styles.perfil} src={perfil} alt="foto do Osvaldo Sousa" />
      </div>
    </div>
  )
}

export default Banner
