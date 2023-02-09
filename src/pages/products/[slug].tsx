// Built-in import
import * as React from "react";
// External import
import { Stack, Container } from "@mui/material";
// Internal import
import ProductContent from "@/components/pages/products/product";

function Product() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        background: (t) => t.palette.common.white,
        color: (t) => t.palette.common.black,
        direction: "rtl",
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        <ProductContent />
      </Container>
    </Stack>
  );
}

export default Product;
