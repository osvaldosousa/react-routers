import styles from './NotFound.module.css'
import dogNotFound from 'src/assets/erro_404.png'
import Button from 'src/components/Button'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const backLastPage = useNavigate()

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

        <div
          onClick={() => backLastPage(-1)}
          className={styles.buttonContainer}
        >
          <Button stylesMod="hug">Voltar</Button>
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
