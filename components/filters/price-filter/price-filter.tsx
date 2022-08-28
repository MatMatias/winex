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
          <PriceFilterOptionsItem>
            <PriceFilterOptionsItemCheckboxSelected></PriceFilterOptionsItemCheckboxSelected>
            <span>Até R$40</span>
          </PriceFilterOptionsItem>
          <PriceFilterOptionsItem>
            <PriceFilterOptionsItemCheckbox></PriceFilterOptionsItemCheckbox>
            <span>R$40 a R$60</span>
          </PriceFilterOptionsItem>
          <PriceFilterOptionsItem>
            <PriceFilterOptionsItemCheckbox></PriceFilterOptionsItemCheckbox>
            <span>R$100 a $$200</span>
          </PriceFilterOptionsItem>
          <PriceFilterOptionsItem>
            <PriceFilterOptionsItemCheckbox></PriceFilterOptionsItemCheckbox>
            <span>R$200 a R$500</span>
          </PriceFilterOptionsItem>
          <PriceFilterOptionsItem>
            <PriceFilterOptionsItemCheckbox></PriceFilterOptionsItemCheckbox>
            <span>Acima de R$500</span>
          </PriceFilterOptionsItem>
        </ul>
      </PriceFilterContainer>
    </FiltersContainer>
  );
};
