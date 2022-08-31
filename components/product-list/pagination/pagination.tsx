import type { Dispatch, SetStateAction } from "react";
import { calculatePagesArray } from "./utils/index";
import {
  PaginationList,
  PaginationButton,
  PaginationSelectedButton,
  PaginationMiddleButton,
  PaginationText,
} from "./pagination-styles";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const simultaneousPagesAmount = 3;
  const firstPage = 1;
  const lastPage = totalPages;

  const pages = calculatePagesArray(
    currentPage,
    totalPages,
    simultaneousPagesAmount
  );

  return (
    <PaginationList>
      {currentPage !== firstPage && (
        <PaginationText
          onClick={() => setCurrentPage((prevState) => prevState - 1)}
        >
          {"<<"} Anterior &nbsp;&nbsp;&nbsp;...
        </PaginationText>
      )}
      {pages.map((page) => {
        if (page === currentPage) {
          return (
            <PaginationSelectedButton key={page}>
              {page}
            </PaginationSelectedButton>
          );
        } else if (page === lastPage - 1 || page === currentPage + 1) {
          return (
            <PaginationMiddleButton
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationMiddleButton>
          );
        } else {
          return (
            <PaginationButton key={page} onClick={() => setCurrentPage(page)}>
              {page}
            </PaginationButton>
          );
        }
      })}
      {currentPage !== lastPage && (
        <PaginationText
          onClick={() => setCurrentPage((prevState) => prevState + 1)}
        >
          ... &nbsp;&nbsp;&nbsp; Próximo {">>"}
        </PaginationText>
      )}
    </PaginationList>
  );
};
