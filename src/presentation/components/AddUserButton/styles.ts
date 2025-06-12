import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(32),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    alignItems: "center",
    justifyContent: "center",
    minWidth: moderateScale(46),
    minHeight: moderateScale(46),
    borderColor: theme.colors.darkBlue,
    backgroundColor: theme.colors.lightBlue,
  },
  addText: {
    color: theme.colors.darkBlue,
    fontWeight: "bold",
    fontSize: moderateScale(16),
  },
  cancelButton: {
    backgroundColor: theme.colors.lightRed,
    borderColor: theme.colors.darkRed,
    borderWidth: 1,
  },
  cancelText: {
    color: theme.colors.darkRed,
    fontWeight: "bold",
    fontSize: moderateScale(18),
  },
});
