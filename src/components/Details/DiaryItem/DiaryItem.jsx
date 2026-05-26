import React from 'react'
import Icon from '../../Icon/Icon';
import progressBlock from '../../../assets/img/block.png'


export const DiaryItem = ({ progress }) => {
  console.log(progress);
  
  
  return (
    <li>
      <div><Icon name = 'icon-block-diary' color="var(--main-text-color)" size={{ width: 20, height: 20 }} /></div>
        <div>
          <div>{progress.startReading}</div>
          <div>%</div>
          <div>minutes</div>
        </div>
        <div>
          <div>Pages</div>
          <div><img src={progressBlock} alt="progress" /></div>
          <div>perPages</div>
        </div>
        <div>Btn</div>
    </li>
  )
}
