import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: moderateScale(16),
    marginTop: moderateScale(12),
    marginHorizontal: moderateScale(16),
    width: "100%",
  },
  button: {
    borderWidth: moderateScale(1),
    borderColor: theme.colors.darkGray,
    borderRadius: moderateScale(999),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    backgroundColor: theme.colors.background,
  },
  buttonText: {
    color: theme.colors.darkGray,
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
});
