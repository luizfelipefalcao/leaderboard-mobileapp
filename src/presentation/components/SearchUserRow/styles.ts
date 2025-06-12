import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    backgroundColor: theme.colors.background,
    borderWidth: moderateScale(1),
    borderColor: theme.colors.mediumGray,
    borderRadius: moderateScale(999),
    paddingLeft: moderateScale(24),
    paddingRight: moderateScale(24),
    paddingVertical: moderateScale(8),
  },
  icon: {
    position: "absolute",
    left: moderateScale(12),
    fontSize: moderateScale(18),
    color: theme.colors.lightGray,
    zIndex: 1,
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: theme.colors.darkGray,
    paddingVertical: 0,
  },
  clearButton: {
    position: "absolute",
    right: moderateScale(12),
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(24),
    width: moderateScale(24),
  },
  clearIcon: {
    fontSize: moderateScale(16),
    color: theme.colors.darkGray,
  },
});
