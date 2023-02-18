// Built-in import
import * as React from "react";
// External import
import { Stack, Grid, Typography, Switch } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// Internal import
import ProductCard from "@/components/shared/product-card";
import { productCardsData } from "./data";
import { toggleCardMode } from "@/store/slices/card-mode";
import { useTranslation } from "react-i18next";

interface IProductListingContent {}

const ProductListingContent: React.FC<IProductListingContent> = () => {
  // Getting translation object
  const { t } = useTranslation(["common"]);
  // dispatcher
  const dispatcher = useDispatch();
  // Getting card mode from redux
  const cardMode = useSelector((state: any) => state.cardMode.mode);
  // if product type
  const isHorizontal = cardMode == "horizontal";
  // handle change toggle button
  const handleChangeCardMode = (mode: boolean) => {
    dispatcher(toggleCardMode(mode ? "vertical" : "horizontal"));
  };

  return (
    <Stack spacing={6}>
      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent={"center"}
      >
        <Typography variant="bodyBold">{t("common:vertical")}</Typography>
        <Switch
          sx={{ mx: 2 }}
          defaultChecked
          onChange={(e) => handleChangeCardMode(e.target.checked)}
        />
        <Typography variant="bodyBold">{t("common:horizontal")}</Typography>
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
              <ProductCard item={data} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ProductListingContent;
