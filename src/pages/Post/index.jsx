import './Post.css'

import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Route, Routes, useParams } from 'react-router-dom'
import PostModel from 'src/components/PostModel'
import posts from 'src/json/posts.json'
import NotFound from '../NotFound'
import RootRoute from 'src/components/RootRoute'

function Post() {
  const urlSearch = useParams()

  const postSearch = posts.find(post => post.id === Number(urlSearch.id))

  if (!postSearch) {
    return <NotFound />
  }

  return (
    <Routes>
      <Route path="*" element={<RootRoute />}>
        <Route
          index
          element={
            <PostModel
              imageBanner={`../../../public/assets/posts/${postSearch.id}/capa.png`}
              contentTitle={postSearch.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{postSearch.texto}</ReactMarkdown>
              </div>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  )
}

export default Post
