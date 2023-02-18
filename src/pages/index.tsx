// Built-in import
import * as React from "react";
// External import
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Home() {
  // Getting translation object
  const { t } = useTranslation(["common"]);
  // Getting router
  const router = useRouter();
  // Push to products page
  React.useEffect(() => {
    router.push("/products");
  }, []);

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        background: (t) => t.palette.common.white,
        color: (t) => t.palette.common.black,
        direction: "rtl",
        py: 3,
      }}
      alignItems="center"
      justifyContent="center"
    >
      {t("common:home_page")}
    </Stack>
  );
}
