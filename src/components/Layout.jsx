import { Box } from "@chakra-ui/react";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <head>
        <title>Real Estate</title>
      </head>
      <Box maxWidth="1280px" m="auto">
        <main>{children}</main>
      </Box>
    </div>
  );
}
