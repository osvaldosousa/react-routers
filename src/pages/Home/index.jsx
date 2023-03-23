import styles from './Home.module.css'
import posts from '../../json/posts.json'

import Banner from '../../components/Banner'
import Posts from '../../components/Posts/idenx'

function Home() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        <Posts posts={posts} />
      </ul>
    </main>
  )
}

export default Home
