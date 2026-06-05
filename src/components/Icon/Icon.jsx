import React from 'react'
import Icons from '../../assets/icon/sprite.svg'
import { IconSvg } from './Icon.styled';

const Icon = ({name,className,size, color, secondaryColor}) => {
  const styles = {
    color: color,
    ...(secondaryColor && { '--icon-secondary': secondaryColor })
  };
  return (
    <IconSvg className={className} height={size.height} width={size.width} style={styles}>
        {/* <use href={Icons+'#icon-'+id}></use> */}
        <use href={`${Icons}#${name}`} />
    </IconSvg>
  )
}
export default Icon