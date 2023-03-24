import styles from './Posts.module.css'

function PostCard({ posts }) {

  return (
    <>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <div className={styles.post}>
              <img
                className={styles.banner}
                src={`../../../public/posts/${post.id}/capa.png`}
                alt={`Capa do post`}
              />

              <h2 className={styles.title}>{post.titulo}</h2>
              <button className={styles.buttonRead}>Ler</button>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default PostCard
