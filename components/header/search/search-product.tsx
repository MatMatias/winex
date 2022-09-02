import Image from "next/image";
import { Fragment, useState } from "react";
import { useProductListStore } from "@/store/index";
import {
  SelectedSearchIcon,
  SearchIcon,
  SearchForm,
  SearchInputContainer,
  SearchInput,
  SearchInputMessage,
  SearchFormSubmissionButton,
} from "./search-product-styles";

export const SearchProduct = () => {
  const [isSearchActivated, setIsSearchActivated] = useState<boolean>(false);
  const [nameParam, setNameParam] = useState<string>("");

  const { updateParams } = useProductListStore((store) => store);

  return (
    <Fragment>
      {isSearchActivated ? (
        <Fragment>
          <SelectedSearchIcon
            onClick={() => setIsSearchActivated((prevState) => !prevState)}
          ></SelectedSearchIcon>
          <SearchInputContainer>
            <SearchForm
              onSubmit={(evt) => {
                evt.preventDefault();
                updateParams({ name: nameParam });
              }}
            >
              <SearchInput
                placeholder="Pesquisar"
                name="product-name"
                id="product-name"
                type="text"
                style={{ width: "100%", height: "100%" }}
                value={nameParam}
                onChange={(evt) => setNameParam(evt.target.value)}
              />
              <label htmlFor="product-name"></label>
              <SearchFormSubmissionButton>
                <Image
                  src="https://img.wine.com.br/fenix/image/_big_bang/icons/icon_search.svg"
                  alt="Submit button"
                  width="28px"
                  height="28px"
                />
              </SearchFormSubmissionButton>
            </SearchForm>
          </SearchInputContainer>
        </Fragment>
      ) : (
        <SearchIcon
          onClick={() => setIsSearchActivated((prevState) => !prevState)}
        ></SearchIcon>
      )}
    </Fragment>
  );
};
