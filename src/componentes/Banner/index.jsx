import React from 'react'
import styles from '../Banner/Banner.module.css'
import circulo from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (

    <div className={styles.banner}>

      <div className={styles.apresentacao}>
      <h1 className={styles.titulo}>Olá Mundo</h1>
      <p className={styles.paragrafo}>
        Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
      </p>
      </div>

      <div className={styles.imagens}>
        <img className={styles.circuloColorido}
          alt='Um círculo de cores em degradê'
          src={circulo}
        />
        <img className={styles.minhaFoto}
          alt='Foto de perfil do Antônio'
          src={minhaFoto} 
          aria-hidden= {true}
        />
    </div>

    </div>
  )
}
