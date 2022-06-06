export type PriceInfoType = {
  sliderValue: { [key: string]: number };
  priceData: Array<number>;
  range: { [key: string]: number };
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
