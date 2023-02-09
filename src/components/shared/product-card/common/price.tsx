// Built-in import
import * as React from "react";
// External import
import { Stack, Typography } from "@mui/material";

interface IProductCardPrice {
  price: string | number;
}

const ProductCardPrice: React.FC<IProductCardPrice> = ({ price }) => {
  return (
    <Stack alignItems="end">
      <Typography variant="bodyMedium">
        {price.withCommas().withPriceUnit()}
      </Typography>
    </Stack>
  );
};

export default ProductCardPrice;
