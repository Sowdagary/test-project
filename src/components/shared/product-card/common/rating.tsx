// Built-in import
import * as React from "react";
// External import
import { Box, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface IProductCardRating {
  rating: number;
}

const ProductCardRating: React.FC<IProductCardRating> = ({ rating }) => {
  return (
    <Stack justifyContent={"end"} direction="row">
      <Box sx={{ pl: 0.5 }}>
        <Typography variant="extraSmallMedium">
          {rating > 5 ? 5 : rating}
        </Typography>
      </Box>
      <Box>
        <StarIcon
          sx={{
            color: (t) => t.palette.extends.yellow.main,
          }}
        />
      </Box>
    </Stack>
  );
};

export default ProductCardRating;
