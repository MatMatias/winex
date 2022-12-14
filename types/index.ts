export type ProductItemType = {
  avaliations: number;
  classification: string;
  volume: string;
  country: string;
  discount: number;
  flag: string;
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  rating: number;
  region: string;
  size: string;
  sommelierComment: string;
  type: string;
};

export type GetProductsParamsType = {
  page?: number;
  limit?: number;
  priceRange?: [number] | [number, number];
  name?: string;
};

export type ParamsType = GetProductsParamsType;
