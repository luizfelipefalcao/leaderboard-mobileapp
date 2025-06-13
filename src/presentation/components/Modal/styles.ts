import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: moderateScale(12),
    alignItems: "center",
    justifyContent: "center",
  },
});
