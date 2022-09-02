function checkPagesArrayOverflow(
  currentPage: number,
  simultaneousPagesAmount: number,
  totalPages: number
): boolean {
  return currentPage + simultaneousPagesAmount - 1 > totalPages;
}

function range(firstIndex: number, lastIndex: number) {
  const array: number[] = [];

  for (let i = firstIndex; i < lastIndex; ++i) {
    array.push(i);
  }

  return array;
}

export function calculatePagesArray(
  currentPage: number,
  totalPages: number,
  simultaneousPagesAmount: number
): number[] {
  const lastPage = totalPages;
  const firstPage = 1;

  const isPagesArrayOverflow = checkPagesArrayOverflow(
    currentPage,
    simultaneousPagesAmount,
    totalPages
  );

  if (currentPage === lastPage) {
    return range(lastPage - simultaneousPagesAmount + 1, lastPage + 1);
  }

  if (isPagesArrayOverflow) {
    return range(currentPage - 1, lastPage + 1);
  }

  if (currentPage === firstPage) {
    return range(currentPage, currentPage + simultaneousPagesAmount);
  }

  return range(currentPage - 1, currentPage + simultaneousPagesAmount - 1);
}
