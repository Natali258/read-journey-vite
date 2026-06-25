import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationBtn, PaginationBtnIcon, PaginationContainerBtn } from './Pagination.styled'
import Icon from '../Icon/Icon'
import {useDispatch, useSelector } from 'react-redux';
import { selectTotalPages } from '../../redux/bookSlice/BookSlice';
import { getBooksThunk } from "../../redux/bookSlice/operations";
import { selectSearchFilter } from "../../redux/Filter/SearchFilterSlice";
import { useVisibleBooks } from "../../hooks/useVisibleBooks";



export const Pagination = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector(selectTotalPages);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const filter = useSelector(selectSearchFilter);
    const visibleCount = useVisibleBooks();
  
  useEffect(() => {
    dispatch(getBooksThunk({ page, limit: visibleCount, ...filter }));
  }, [dispatch, page, filter, visibleCount]);

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
            <PaginationBtnIcon name='icon-left'/>
        </PaginationBtn>
        <PaginationBtn onClick={handleNext} disabled={page === totalPages}>
            <PaginationBtnIcon name='icon-right' />
        </PaginationBtn>
    </PaginationContainerBtn>
  )
}
