// Built-in import
import * as React from "react";
// External import
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
// Internal import
import { productCardsData } from "../data";
import ProductCardImage from "@/components/shared/product-card/common/image";
import ProductCardColor from "@/components/shared/product-card/common/color";
import ProductCardRating from "@/components/shared/product-card/common/rating";
import ProductCardPrice from "@/components/shared/product-card/common/price";

interface IProductContentProps {}

const ProductContent: React.FC<IProductContentProps> = () => {
  // router
  const router = useRouter();
  // Getting query as router
  const { slug } = router.query;
  // product data
  const productData = productCardsData[Number(slug) - 1];

  return (
    <Stack>
      {/* color */}
      <Stack alignItems={"end"}>
        <ProductCardColor color={productData?.color || ""} />
      </Stack>
      {/* color */}
      {/* image */}
      <Stack alignItems="center" width="100%">
        <ProductCardImage
          image={productData?.image || ""}
          sx={{ maxWidth: "700px", width: "100%" }}
        />
      </Stack>
      {/* image */}
      <Stack alignItems="center" spacing={3}>
        {/* title */}
        <Typography variant="headingBold">
          {productData?.title || ""}
        </Typography>
        {/* title */}
        {/* price & rating */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <ProductCardPrice price={productData?.price || ""} />
          <ProductCardRating rating={productData?.rating || 0} />
        </Stack>
        {/* price & rating */}
        {/* description */}
        <Typography variant="bodyMedium">
          {productData?.description || ""}
        </Typography>
        {/* description */}
      </Stack>
    </Stack>
  );
};

export default ProductContent;
