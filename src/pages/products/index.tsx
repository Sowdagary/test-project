// Built-in import
import * as React from "react";
// External import
import { Stack, Container } from "@mui/material";
//Internal Import
import ProductListingContent from "@/components/pages/products";

export default function ProductListing() {
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
        <ProductListingContent />
      </Container>
    </Stack>
  );
}
