import React from 'react'
import styles from 'paginas/NaoEncontrada/NaoEncontrada.module.css'
import img404 from 'assets/erro_404.png'
import Botao from 'componentes/Botao'
import { useNavigate } from 'react-router-dom'

const NaoEncontrada = () => {

  const restaurarPagina = useNavigate();
  
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>
          404</span>

        <h1 className={styles.titulo}>
          Ops! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?</p>

        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>

        <div onClick = {() => restaurarPagina(-1)} className={styles.botaoContainer}>

          <Botao tipo='lg'
          >Voltar</Botao>
        
        </div>

        <img className={styles.imagemCachorro} src={img404} alt="Cachorro de oculos vestindo roupa humana"/>

      </div>
        
      <div className={styles.espacoEmBranco}></div>
      
    </>
  )
}

export default NaoEncontrada