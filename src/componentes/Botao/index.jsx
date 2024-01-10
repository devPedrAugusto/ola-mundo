import styles from 'componentes/Botao/Botao.module.css'

const Botao = ({ children, tipo }) => {
  return (
    <button className={`${styles.botaoPrincipal} ${styles[tipo]}`}>
        {children}</button>
  )
}

export default Botao
