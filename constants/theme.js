import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

export const SIZES = {
  small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xLarge: 24 * fontScale,
};

export const COLORS = {
  bg: "#ebf4f1",
  cardBg: "#f4f6f5",
  //   cardBgTheme: "#ebf4f1",
  second: "#379570",
  white: "#FFF",
  black: "#000",
  gray: "#ddd",
};

export const FONTS = {
  bold: "bold",
  light: "light",
  semiBold: "semibold",
  medium: "medium",
  regular: "regular",
};
