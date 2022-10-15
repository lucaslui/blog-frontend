import React from 'react'
import Styles from './logo-styles.scss'

import LogoSVG from '../../assets/imgs/logo.svg'

type Props = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

const Logo: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.loginLogo}>
      <img src={LogoSVG} alt="logo" />
      <div className={Styles.label}>
        <h1> Espaço de Conhecimento em IoT </h1>
        <h2>
          Tendo como objetivo o ensino de Internet das Coisas de forma
          simples, prática e objetiva.
        </h2>
      </div>
    </div>
  )
}

export default Logo
