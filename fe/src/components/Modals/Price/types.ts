export type PriceInfoType = {
  priceData: Array<number>;
  dataPriceInfo: { [key: string]: number };
  initSliderRange: { [key: string]: number };
  currentPriceRange: { [key: string]: number };
};

export type ObjType = {
  [key: string]: number;
};

export type DataInfo = {
  data: Array<number>;
  sections: number;
  maxPrice: number;
  minPrice: number;
};
