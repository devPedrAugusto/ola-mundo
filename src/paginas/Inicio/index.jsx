import React from 'react'
import meusPosts from 'json/posts.json'
import PostCards from 'componentes/PostCards';
import styles from 'paginas/Inicio/inicio.module.css'


const Inicio = () => {
  return (
    <>
      <ul className={styles.posts}>
        {meusPosts.map((post) =>
          <PostCards
            key={post.id}
            id={post.id}
            titulo={post.titulo}
            texto={post.texto}
          />
        )}
      </ul>
    </>
  )
}

export default Inicio
