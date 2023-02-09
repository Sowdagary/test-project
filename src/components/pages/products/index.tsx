// Built-in import
import * as React from "react";
// External import
import { Stack, Grid, Typography, Switch } from "@mui/material";
// Internal import
import ProductCard from "@/components/shared/product-card";
import { productCardsData } from "./data";
import Link from "next/link";

interface IProductListingContent {}

export type IProductsType = "vertical" | "horizontal";

const ProductListingContent: React.FC<IProductListingContent> = () => {
  // State type products
  const [productsType, setProductsType] =
    React.useState<IProductsType>("vertical");
  // if product type
  const isHorizontal = productsType == "horizontal";

  return (
    <Stack spacing={6}>
      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent={"center"}
      >
        <Typography variant="bodyBold">vertical</Typography>
        <Switch
          sx={{ mx: 2 }}
          defaultChecked
          onChange={(e) =>
            setProductsType(e.target.checked ? "vertical" : "horizontal")
          }
        />
        <Typography variant="bodyBold">horizontal</Typography>
      </Stack>

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
            <Link href={`/products/${data.id}`}>
              <ProductCard item={data} type={productsType} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ProductListingContent;
