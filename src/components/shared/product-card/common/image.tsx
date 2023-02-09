// Built-in import
import * as React from "react";
// External import
import { Box, SxProps } from "@mui/material";

interface IProductCardImage {
  image: string;
  sx?: SxProps;
}

const ProductCardImage: React.FC<IProductCardImage> = ({ image, sx }) => {
  return (
    <Box
      sx={{
        maxWidth: "220px",
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
        ...sx,
      }}
    >
      <img src={image} />
    </Box>
  );
};

export default ProductCardImage;
