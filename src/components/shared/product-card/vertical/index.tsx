// Built-in import
import * as React from "react";
// External import
import { Box, Stack, alpha } from "@mui/material";
// Internal import
import ProductCardImage from "../common/image";
import ProductCardTitle from "../common/title";
import ProductCardRating from "../common/rating";
import ProductCardPrice from "../common/price";
import { IProductCardItem } from "..";
import ProductCardColor from "../common/color";

interface IProductCardVertical {
  item: IProductCardItem;
}

const ProductCardVertical: React.FC<IProductCardVertical> = ({ item }) => {
  // Getting props as item
  const { image, title, rating, price, color } = item;

  return (
    <Stack
      sx={{
        py: 2,
        px: 1,
        border: "1px solid",
        borderColor: (t) => alpha(t.palette.common.black, 0.05),
        cursor: "pointer",
        transition: "0.1s",
        "&:hover": {
          boxShadow: "0px 0px 15px #99999930",
        },
      }}
    >
      {/* color */}
      <ProductCardColor color={color} />
      {/* color */}
      {/* image */}
      <ProductCardImage image={image} sx={{ mx: "auto" }} />
      {/* image */}
      {/* title */}
      <ProductCardTitle title={title} />
      {/* title */}
      {/* rating */}
      <ProductCardRating rating={rating} />
      {/* rating */}
      {/* price */}
      <ProductCardPrice price={price} />
      {/* price */}
    </Stack>
  );
};

export default ProductCardVertical;
