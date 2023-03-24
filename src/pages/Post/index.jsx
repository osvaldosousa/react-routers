import './Post.css'

import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Route, Routes, useParams } from 'react-router-dom'
import PostModel from 'src/components/PostModel'
import posts from 'src/json/posts.json'
import NotFound from '../NotFound'
import RootRoute from 'src/components/RootRoute'
import PostCard from 'src/components/PostCard'

function Post() {
  const urlSearch = useParams()
  const postSearch = posts.find(post => post.id === Number(urlSearch.id))

  const postSugestion = posts
    .filter(post => post.id !== Number(postSearch.id))
    .sort((a, b) => b.id - a.id)
    .splice(0, 4)

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
                <h3>Outros posts que você pode gostar:</h3>
              </div>
              <div className="post-sugestion">
                {postSugestion.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  )
}

export default Post
