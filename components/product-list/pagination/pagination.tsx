import { Fragment } from "react";
import { useProductListStore } from "@/store/index";
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
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const simultaneousPagesAmount = 3;
  const firstPage = 1;
  const lastPage = totalPages;

  const { page: currentPage } = useProductListStore((store) => store.params);
  const { updateParams } = useProductListStore((store) => store);

  const pages = calculatePagesArray(
    currentPage,
    totalPages,
    simultaneousPagesAmount
  );

  if (totalPages === firstPage) {
    return (
      <PaginationList>
        <PaginationSelectedButton>{firstPage}</PaginationSelectedButton>
      </PaginationList>
    );
  }

  if (totalPages === 0) {
    return <Fragment></Fragment>;
  }

  return (
    <PaginationList>
      {currentPage !== firstPage && (
        <PaginationText onClick={() => updateParams({ page: currentPage - 1 })}>
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
              onClick={() => updateParams({ page: page })}
            >
              {page}
            </PaginationMiddleButton>
          );
        } else {
          return (
            <PaginationButton
              key={page}
              onClick={() => updateParams({ page: page })}
            >
              {page}
            </PaginationButton>
          );
        }
      })}
      {currentPage !== lastPage && (
        <PaginationText onClick={() => updateParams({ page: currentPage + 1 })}>
          ... &nbsp;&nbsp;&nbsp; Próximo {">>"}
        </PaginationText>
      )}
    </PaginationList>
  );
};
