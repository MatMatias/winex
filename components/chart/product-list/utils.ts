import type { ProductItemType } from "@/types/index";

export function countItemOnList(
  itemsList: ProductItemType[],
  searchedItem: ProductItemType
): number {
  const { id } = searchedItem;
  let searchedItemCounter = 0;

  itemsList.forEach((item) => {
    if (item.id === id) {
      searchedItemCounter++;
    }
  });

  return searchedItemCounter;
}
