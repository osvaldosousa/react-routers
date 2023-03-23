import styles from './Home.module.css'
import posts from '../../json/posts.json'

import Banner from '../../components/Banner'
import PostCard from '../../components/PostCard/idenx'

function Home() {
  return (
      <ul className={styles.posts}>
        <PostCard posts={posts} />
      </ul>
  )
}

export default Home
