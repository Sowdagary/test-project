// Built-in import
import * as React from "react";
// Internal import
import ProductCardVertical from "./vertical";
import ProductCardHorizontal from "./horizontal";

interface IProductCard {
  type?: "horizontal" | "vertical";
  item: IProductCardItem;
}

export interface IProductCardItem {
  image: string;
  title: string;
  rating: number;
  price: string | number;
  color: string;
}

const ProductCard: React.FC<IProductCard> = ({ type = "vertical", item }) => {
  return type == "horizontal" ? (
    <ProductCardHorizontal item={item} />
  ) : (
    <ProductCardVertical item={item} />
  );
};

export default ProductCard;
