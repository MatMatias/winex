import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import {
  PriceFilterOptionsItem,
  PriceFilterOptionsItemCheckboxSelected,
  PriceFilterOptionsItemCheckbox,
} from "./price-filter-styles";
import { useProductListStore } from "@/store/index";

export const PriceFilterItem = ({
  children,
  priceRange,
}: {
  priceRange: [number, number] | [number];
  children: ReactNode;
}) => {
  const { updateParams } = useProductListStore((store) => store);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    updateParams({ priceRange: priceRange });
  }, [isSelected, priceRange, updateParams]);

  return (
    <PriceFilterOptionsItem
      onClick={() => {
        setIsSelected((prevState) => !prevState);
      }}
    >
      {isSelected ? (
        <PriceFilterOptionsItemCheckboxSelected></PriceFilterOptionsItemCheckboxSelected>
      ) : (
        <PriceFilterOptionsItemCheckbox></PriceFilterOptionsItemCheckbox>
      )}
      {children}
    </PriceFilterOptionsItem>
  );
};
