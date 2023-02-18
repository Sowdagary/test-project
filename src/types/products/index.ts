export type cardMode = "vertical" | "horizontal";

export interface IProductCardItem {
  image: string;
  title: string;
  rating: number;
  price: string | number;
  color: string;
}
