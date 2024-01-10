import React from 'react'
import styles from 'componentes/PostCards/PostCards.module.css'
import { Link } from 'react-router-dom'
import Botao from 'componentes/Botao'

const PostCards = ({link, postSize, id, titulo }) => {

  return (
    <Link to={`/posts/${id}`}>
      <div className={`${styles.post} ${styles[postSize]}`}>

        <img className={styles.capa}
          src={`/assets/posts/${id}/capa.png`}
          alt='imagem de capa do post'
        />

        <h2 className={styles.titulo}
        >{titulo}</h2>

        <Botao>Ler</Botao>

      </div>
    </Link>
  )
}

export default PostCards
