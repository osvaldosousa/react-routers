import styles from './Footer.module.css'

import { ReactComponent as CopyRight } from '../../assets/copy-right.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <CopyRight />
      <p>
        Desenvolvido por{' '}
        <a href="" target={'_blank'}>
          Osvaldo Sousa{' '}
        </a>{' '}
        com{' '}
        <a href="" target={'_blank'}>
          {' '}
          Alura
        </a>
      </p>
    </footer>
  )
}

export default Footer
