import React from 'react'
import Select from 'react-select'

import Styles from './select-group.scss'

type Props = any & { label: string }

const SelectGroup: React.FC<Props> = (props: Props) => {
  return (
    <div className={`${Styles.selectGroup}`}>
      <label> {props.label} </label>
      <Select {...props} className='react-select-container' classNamePrefix='react-select' />
    </div>
  )
}

export default SelectGroup
