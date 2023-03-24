import styles from './PostModel.module.css'

function PostModel({ children, imageBanner, contentTitle }) {
  return (
    <article className={styles.postModelContainer}>
      <div
        className={styles.imageBanner}
        style={{ backgroundImage: `url(${imageBanner})`}}
      ></div>

      <h2 className={styles.title}>{contentTitle}</h2>

      <div className={styles.postContainer}>{children}</div>
    </article>
  )
}

export default PostModel
