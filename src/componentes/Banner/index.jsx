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
        Olá prazer em conhecê-lo. Permita me apresentar, me chamo Pedro Augusto tenho 20 anos.
      </p>
      </div>

      <div className={styles.imagens}>
        <img className={styles.circuloColorido}
          src={circulo}
        />
        <img className={styles.minhaFoto}
          src={minhaFoto} 
          aria-hidden= {true}
        />
    </div>

    </div>
  )
}
