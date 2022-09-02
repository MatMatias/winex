import { PriceFilterItem } from "./price-filter-item";
import { FiltersContainer } from "../filters-styles";
import {
  PriceFilterContainer,
  PriceFilterOptionsItem,
  PriceFilterOptionsItemCheckbox,
  PriceFilterOptionsItemCheckboxSelected,
} from "./price-filter-styles";

export const PriceFilter = () => {
  return (
    <FiltersContainer>
      <PriceFilterContainer>
        <h1>Refine sua busca</h1>
        <h2>Por preço</h2>
        <ul>
          <PriceFilterItem priceRange={[40]}>
            <span>Até R$40</span>
          </PriceFilterItem>
          <PriceFilterItem priceRange={[40, 60]}>
            <span>R$40 a R$60</span>
          </PriceFilterItem>
          <PriceFilterItem priceRange={[60, 100]}>
            <span>R$60 a $100</span>
          </PriceFilterItem>
          <PriceFilterItem priceRange={[100, 200]}>
            <span>R$100 a R$200</span>
          </PriceFilterItem>
          <PriceFilterItem priceRange={[200, 500]}>
            <span>R$200 a R$500</span>
          </PriceFilterItem>
          <PriceFilterItem priceRange={[500]}>
            <span>Acima de R$500</span>
          </PriceFilterItem>
        </ul>
      </PriceFilterContainer>
    </FiltersContainer>
  );
};
