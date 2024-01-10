import styles from 'componentes/PostPadrao/PostPadrao.module.css'
import SugestaoPost from 'componentes/SugestaoPost'


const PostPadrao = ({ fotoCapa, titulo, children}) => {

    return (
    <article className={styles.postModeloContainer}>
        <div 
            className={styles.fotoCapa}
            style={{ backgroundImage: `url(${fotoCapa})` }}
        ></div>

        <h2 className={styles.titulo}>
            {titulo}
        </h2>

        <div className={styles.postConteudoContainer}>
            {children}
        </div>

    </article>
  )
}

export default PostPadrao
