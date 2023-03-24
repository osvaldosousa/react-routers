import styles from './NotFound.module.css'
import dogNotFound from 'src/assets/erro_404.png'

function NotFound() {
  return (
    <>
      <div className={styles.notFoundContainer}>
        <span className={styles.textErro}>404</span>

        <h1 className={styles.title}>Ops! Página não encontrada.</h1>

        <p className={styles.paragraph}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={styles.paragraph}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div className={styles.buttonContainer}>
          <button>voltar</button>
        </div>

        <img
          className={styles.imageDog}
          src={dogNotFound}
          alt="cachorro estiloso le avisando que a página não foi encontrada"
        />
      </div>

      <div className={styles.voidSpace}></div>
    </>
  )
}

export default NotFound
