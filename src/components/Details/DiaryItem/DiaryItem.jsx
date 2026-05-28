import React from 'react'
import Icon from '../../Icon/Icon';
import progressBlock from '../../../assets/img/block.png'
import { useSelector } from 'react-redux';
import { selectReadingBook } from '../../../redux/bookSlice/BookSlice';
import { DiaryBtn, DiaryContainerData, DiaryContainerLi, DiaryContainerPage, DiaryData, DiaryIcon, DiaryMinutes, DiaryPages, DiaryPercent, DiaryPerPages } from './DiaryItem.styled';


export const DiaryItem = ({ progress }) => {
  const readingBook = useSelector(selectReadingBook)
  console.log(progress);
  const startDate = new Date(progress.startReading);
  const finishDate = new Date(progress.finishReading);
  const formatted = startDate.toLocaleDateString("uk-UA");
  const timeDiff = finishDate - startDate;
  const minutes = Math.round(timeDiff / (1000 * 60));

  const pagesRead = progress.finishPage - progress.startPage;

  const percent = Math.round(
    (pagesRead / readingBook.totalPages) * 100
  );
  
  
  return (
    <DiaryContainerLi>
      <DiaryIcon>
        <Icon name = 'icon-block-diary' color="var(--main-text-color)" size={{ width: 20, height: 20 }} />
      </DiaryIcon>
      <DiaryContainerData>
        <DiaryData>{formatted}</DiaryData>
        <DiaryPercent>{percent}%</DiaryPercent>
        <DiaryMinutes>{minutes} minutes</DiaryMinutes>
      </DiaryContainerData>
      <DiaryContainerPage>
        <DiaryPages>{pagesRead} pages</DiaryPages>
        <div><img src={progressBlock} alt="progress" /></div>
        <DiaryPerPages>{progress.speed} pages <br/> per hour</DiaryPerPages>
      </DiaryContainerPage>
      <DiaryBtn>
        <Icon name='icon-trash-2' size={{width: 14, height: 14}} color='var(--main-text-color)'/>
      </DiaryBtn>
    </DiaryContainerLi>
    //  <DiaryContainerLi>
    //   <div>
    //     <DiaryIcon>
    //       <Icon name = 'icon-block-diary' color="var(--main-text-color)" size={{ width: 20, height: 20 }} />
    //     </DiaryIcon>
    //     <DiaryContainerData>
    //       <DiaryData>{formatted}</DiaryData>
    //       <DiaryPercent>{percent}%</DiaryPercent>
    //       <DiaryMinutes>{minutes} minutes</DiaryMinutes>
    //     </DiaryContainerData>
    //   </div>
    //   <DiaryContainer2>
    //     <DiaryContainerPage>
    //       <DiaryPages>{pagesRead} pages</DiaryPages>
    //       <div><img src={progressBlock} alt="progress" /></div>
    //       <DiaryPerPages>{progress.speed} pages <br /> per hour</DiaryPerPages>
    //     </DiaryContainerPage>
    //     <div>
    //       <Icon name='icon-trash-2' size={{width: 14, height: 14}} color='var(--main-text-color)'/>
    //     </div>
    //   </DiaryContainer2>
    // </DiaryContainerLi>
  )
}
