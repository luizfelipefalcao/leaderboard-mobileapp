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
  iconClose: {
    paddingRight: moderateScale(16),
    marginTop: -moderateScale(164),
    marginBottom: -moderateScale(12),
    width: "100%",
    alignItems: "flex-end",
  },
  iconCloseText: {
    color: theme.colors.darkGray,
    fontSize: moderateScale(26),
    fontWeight: "bold",
  },
});
