// Built-in import
import * as React from "react";
// External import
import { useSelector } from "react-redux";
// Internal import
import ProductCardVertical from "./vertical";
import ProductCardHorizontal from "./horizontal";

interface IProductCard {
  item: IProductCardItem;
}

export type cardMode = "vertical" | "horizontal";

export interface IProductCardItem {
  image: string;
  title: string;
  rating: number;
  price: string | number;
  color: string;
}

const ProductCard: React.FC<IProductCard> = ({ item }) => {
  // Getting card mode from redux
  const type: cardMode = useSelector((state: any) => state.cardMode.mode);

  return type == "horizontal" ? (
    <ProductCardHorizontal item={item} />
  ) : (
    <ProductCardVertical item={item} />
  );
};

export default ProductCard;
