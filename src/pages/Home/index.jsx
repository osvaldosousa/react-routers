import styles from './Home.module.css'
import posts from 'src/json/posts.json'

import Banner from '../../components/Banner'
import PostCard from 'src/components/PostCard'

function Home() {
  return (
      <ul className={styles.posts}>
        <PostCard posts={posts} />
      </ul>
  )
}

export default Home
