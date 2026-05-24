import React from 'react'
import Icons from '../../assets/icon/sprite.svg'

const Icon = ({name,className,size, color, secondaryColor}) => {
  const styles = {
    color: color,
    ...(secondaryColor && { '--icon-secondary': secondaryColor })
  };
  return (
    <svg className={className} height={size.height} width={size.width} style={styles}>
        {/* <use href={Icons+'#icon-'+id}></use> */}
        <use href={`${Icons}#${name}`} />
    </svg>
  )
}
export default Icon