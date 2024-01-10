import React from 'react'
import 'paginas/Posts/textoPost.css'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostPadrao from 'componentes/PostPadrao';
import Markdown from 'react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import SugestaoPost from 'componentes/SugestaoPost';

const Posts = () => {
  const postID = useParams().id;
  let post = posts.find((post) => post.id === Number(postID))

  if (!post) {
    return <NaoEncontrada />
  }

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route index element={
          <PostPadrao
            posts = {posts}
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}>

            <Markdown className='post-markdown-containe'>
              {post.texto}
            </Markdown>

            <SugestaoPost postID={postID}/>

          </PostPadrao>}/>
      </Route>
    </Routes>
  )
}

export default Posts