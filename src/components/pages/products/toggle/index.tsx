// Built-in import
import * as React from "react";
// External import
import { Stack, Typography, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// Internal import
import { toggleCardMode } from "@/store/slices/card-mode";
import { useTranslation } from "react-i18next";

interface IProductListingToggle {}

const ProductListingToggle: React.FC<IProductListingToggle> = () => {
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
    <Stack
      direction="row"
      width="100%"
      alignItems="center"
      justifyContent={"center"}
    >
      <Typography variant="bodyBold">{t("common:vertical")}</Typography>
      <Switch
        sx={{ mx: 2 }}
        checked={!isHorizontal}
        onChange={(e) => handleChangeCardMode(e.target.checked)}
      />
      <Typography variant="bodyBold">{t("common:horizontal")}</Typography>
    </Stack>
  );
};

export default ProductListingToggle;
