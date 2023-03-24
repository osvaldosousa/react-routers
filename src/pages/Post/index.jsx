import './Post.css'

import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import PostModel from 'src/components/PostModel'
import posts from 'src/json/posts.json'

function Post() {
  const urlSearch = useParams()

  const postSearch = posts.find(post => post.id === Number(urlSearch.id))

  return (
    <PostModel
      imageBanner={`../../../public/assets/posts/${postSearch.id}/capa.png`}
      contentTitle={postSearch.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{postSearch.texto}</ReactMarkdown>
      </div>
    </PostModel>
  )
}

export default Post
