import React from 'react'
import Icons from '../../assets/icon/sprite.svg'

const Icon = ({id, name,className,size, color}) => {
  return (
    <svg className={className} height={size.height} width={size.width} style={{color}}>
        {/* <use href={Icons+'#icon-'+id}></use> */}
        <use href={`${Icons}#${name}`} />
    </svg>
  )
}
export default Icon