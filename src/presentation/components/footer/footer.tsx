import React, { memo } from 'react'
import Styles from './footer-styles.scss'

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
        © {new Date().getFullYear()} Copel. Todos os direitos reservados.
    </footer>
  )
}

export default memo(Footer)
