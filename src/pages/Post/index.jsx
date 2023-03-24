import React from 'react'
import { useParams } from 'react-router-dom'
import PostModel from '../../components/PostModel'
import posts from '../../json/posts.json'

function Post() {
  const urlSearch = useParams()

  const postSearch = posts.find(post => post.id === Number(urlSearch.id))
  
  return (
    <PostModel
      imageBanner={`../../../public/assets/posts/${postSearch.id}/capa.png`}
      contentTitle={postSearch.titulo}
    >
      {postSearch.texto}
    </PostModel>
  )
}

export default Post
