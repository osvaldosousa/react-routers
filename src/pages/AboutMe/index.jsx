import imageBanner from '../../assets/about-me-banner.png'
import imageProfile from '../../assets/perfil.jpg'
import styles from './AboutMe.module.css'

import PostModel from '../../components/PostModel'

function AboutMe() {
  return (
    <PostModel imageBanner={imageBanner} contentTitle={'Sobre Mim'}>
      <h2 className={styles.subTitle}>Olá, Eu Sou o Osvaldo.</h2>

      <img
        className={styles.imageAboutMe}
        src={imageProfile}
        alt="Foto do Osvaldo tirada de frente a um espelho"
      />

      <p className={styles.paragraph}>
        Eu sou a vingança sorridente do Jack. Eu sou o suor frio do Jack. Eu sou
        o cólon do Jack. Eu sou a completa falta de surpresa de Jack. Eu sou a
        vida desperdiçada do Jack. Eu sou o inflamado sentido de rejeição do
        Jack. Eu sou o coração partido do Jack.
      </p>
      <p className={styles.paragraph}>
        Eu sou a medula oblonga do Jack, sem mim Jack não controlaria seus
        batimentos cardíacos, pressão e respiração. Eu sou o suor frio de Jack.
        Eu sou o coração quebrado de Jack. Eu sou a vingança sorridente de Jack.
        Eu sou o câncer de Jack.
      </p>
      <p className={styles.paragraph}>
        Eu sou a vingança sorridente do Jack. Eu sou o suor frio do Jack. Eu sou
        o cólon do Jack. Eu sou a completa falta de surpresa de Jack. Eu sou a
        vida desperdiçada do Jack. Eu sou o inflamado sentido de rejeição do
        Jack. Eu sou o coração partido do Jack.
      </p>
      <p className={styles.paragraph}>
        Eu sou a medula oblonga do Jack, sem mim Jack não controlaria seus
        batimentos cardíacos, pressão e respiração. Eu sou o colo do Jack. Sou o
        ducto biliar enfurecido do Jack, põe uma arma na minha cabeça e pinte as
        paredes com meu cérebro. Eu sou a completa falta de surpresa do Jack. Eu
        sou o suor frio do Jack. Eu sou a vingança sorridente do Jack. Eu sou o
        sentido de rejeição inflamada do Jack. Sou o coração partido do Jack.
      </p>
    </PostModel>
  )
}

export default AboutMe
