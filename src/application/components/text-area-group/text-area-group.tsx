import React from 'react'
import Styles from './text-area-group.scss'

import TextArea from '../text-area/text-area'

type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & { span: string }

const TextAreaGroup: React.FC<Props> = (props: Props) => {
  return (
    <div className={`${Styles.textareaGroup}`}>
      <span> {props.span} </span>
      <TextArea {...props} />
    </div>
  )
}

export default TextAreaGroup
