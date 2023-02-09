// Built-in import
import * as React from "react";
// External import
import { Box } from "@mui/material";

interface IProductCardColor {
  color: string;
}

const ProductCardColor: React.FC<IProductCardColor> = ({ color }) => {
  return (
    <Box
      sx={{ width: 10, height: 10, borderRadius: "50%", background: color, boxShadow: "0px 0px 6px #99999970" }}
    ></Box>
  );
};

export default ProductCardColor;
