import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    margin: theme.spaces.margin,
    padding: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    backgroundColor: theme.colors.background,
    borderRadius: moderateScale(8),
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    borderWidth: moderateScale(1),
    borderColor: theme.colors.darkBlue,
    borderRadius: moderateScale(6),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(16),
  },
  buttonText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
  },
  addButton: {
    backgroundColor: theme.colors.background,
  },
  addText: {
    color: theme.colors.darkBlue,
  },
  cancelButton: {
    backgroundColor: theme.colors.lightRed,
    borderColor: theme.colors.darkRed,
  },
  cancelText: {
    color: theme.colors.darkRed,
  },
});
