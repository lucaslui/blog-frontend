import React from 'react'
import Styles from './input-group.scss'

import Input from '../input/input'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { span: string, mr?: boolean }

const InputGroup: React.FC<Props> = (props: Props) => {
  return (
    <div className={`${Styles.inputGroup} ${props.mr && 'mr'}`}>
      <span> {props.span} </span>
      <Input {...props} />
    </div>
  )
}

export default InputGroup
