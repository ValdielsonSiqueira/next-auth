import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181b23",
      "800": "#1f2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#DED2D9",
      "50": "#EEEEF2",
    },
    purple: {
      "900": "#7F265B",
      "800": "#73114B"
    },
    text: {
      900: "#525252"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg:'white',
        color:'black.50',
      }
    }
  }
});