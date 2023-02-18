// Built-in import
import * as React from "react";
// External import
import { Stack, Grid } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// Internal import
import ProductCard from "@/components/shared/product-card";
import { productCardsData } from "./data";
import { routes } from "@/constants/routes";
import ProductListingToggle from "./toggle";

interface IProductListingContent {}

const ProductListingContent: React.FC<IProductListingContent> = () => {
  // Getting card mode from redux
  const cardMode = useSelector((state: any) => state.cardMode.mode);
  // if product type
  const isHorizontal = cardMode == "horizontal";

  return (
    <Stack spacing={6}>
      {/* product filter */}
      <ProductListingToggle />
      {/* product cards */}
      <Grid container>
        {productCardsData.map((data) => (
          <Grid
            item
            xs={12}
            sm={isHorizontal ? 12 : 6}
            md={isHorizontal ? 6 : 4}
            lg={isHorizontal ? 4 : 3}
            key={data.id}
          >
            <Link href={`${routes.products.index}/${data.id}`}>
              <ProductCard item={data} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ProductListingContent;
