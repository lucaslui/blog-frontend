import React from 'react'
import Styles from './button-styles.scss'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button className={Styles.buttonWrap} {...props}> {props.children} </button>
  )
}

export default Button
