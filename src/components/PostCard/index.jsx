import { Link } from 'react-router-dom'
import Button from '../Button'
import styles from './Posts.module.css'

function PostCard({ posts }) {
  return (
    <>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <div className={styles.post}>
                <img
                  className={styles.banner}
                  src={`../../../public/assets/posts/${post.id}/capa.png`}
                  alt={`Capa do post`}
                />

                <h2 className={styles.title}>{post.titulo}</h2>
                <Button>Ler Sobre</Button>
              </div>
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default PostCard
