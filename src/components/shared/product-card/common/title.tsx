// Built-in import
import * as React from "react";
// External import
import { Box, Typography } from "@mui/material";

interface IProductCardTitle {
  title: string;
}

const ProductCardTitle: React.FC<IProductCardTitle> = ({ title }) => {
  return (
    <Box>
      <Typography variant="smallMedium">{title}</Typography>
    </Box>
  );
};

export default ProductCardTitle;
