// Built-in import
import * as React from "react";
// External import
import { Stack } from "@mui/material";
//Internal Import
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  React.useEffect(() => {
    router.push("/products")
  }, [])
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
      Home Page
    </Stack>
  );
}
