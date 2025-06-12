import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

const GUIDELINE_BASE_WIDTH = 360;

const horizontalScale = (sizeFactor: number) => (width / GUIDELINE_BASE_WIDTH) * sizeFactor;
export const moderateScale = (sizeFactor: number, factor = 0.5) => {
  const scale = sizeFactor + (horizontalScale(sizeFactor) - sizeFactor) * factor;
  return Math.trunc(scale);
};
