import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationBtn, PaginationContainerBtn } from './Pagination.styled'
import Icon from '../Icon/Icon'
import {useDispatch, useSelector } from 'react-redux';
import { selectTotalPages } from '../../redux/bookSlice/BookSlice';
import { getBooksThunk } from "../../redux/bookSlice/operations";



export const Pagination = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector(selectTotalPages);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;

    useEffect(() => {
  dispatch(getBooksThunk({ page, limit: 10 }));
}, [dispatch, page]);
    
  const handlePrev = () => {
    if (page > 1) {
      setSearchParams({ page: page - 1 });
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setSearchParams({ page: page + 1 });
    }
  };

  return (
    <PaginationContainerBtn>
        <PaginationBtn onClick={handlePrev} disabled={page === 1}>
            <Icon name='icon-left'size={{width: 20, height: 20}}/>
        </PaginationBtn>
        <PaginationBtn onClick={handleNext} disabled={page === totalPages}>
            <Icon name='icon-right' size={{width: 20, height: 20}} />
        </PaginationBtn>
    </PaginationContainerBtn>
  )
}
