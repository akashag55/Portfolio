"use client";

import { MantineProvider, createTheme, localStorageColorSchemeManager } from "@mantine/core";
import { ReactNode } from "react";

const theme = createTheme({
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontFamilyMonospace: "var(--font-ibm-plex-mono), monospace",
  primaryColor: "orange",
  defaultRadius: "md",
});

const colorSchemeManager = localStorageColorSchemeManager({
  key: "akash-portfolio-color-scheme",
});

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark" colorSchemeManager={colorSchemeManager}>
      {children}
    </MantineProvider>
  );
}
