import React from 'react'
import posts from 'json/posts.json'
import PostCards from 'componentes/PostCards'
import styles from 'componentes/SugestaoPost/SugestaoPost.module.css'

const SugestaoPost = ({ postID }) => {

    const postsRecomendados = (posts.filter((post) => post.id != Number(postID))).slice(0,4);

    return (
        <div>
            <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
            <ul className={styles.posts}>
                {postsRecomendados.map((post) =>
                    <PostCards
                        postSize = 'short'
                        id={post.id}
                        titulo={post.titulo}
                        texto={post.texto}
                    />)}
            </ul>
        </div>
    )
}

export default SugestaoPost
