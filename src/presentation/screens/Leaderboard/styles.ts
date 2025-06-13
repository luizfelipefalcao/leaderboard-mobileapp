import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: moderateScale(12),
    paddingHorizontal: moderateScale(23),
    backgroundColor: theme.colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: moderateScale(12),
    marginBottom: moderateScale(theme.spaces.margin * 3),
  },
  logoRow: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: moderateScale(12),
  },
  logo: {
    height: moderateScale(50),
    width: moderateScale(90),
    marginBottom: moderateScale(12),
  },
  listWrapper: {
    flex: 1,
    width: "100%",
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(4),
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    gap: moderateScale(8),
    paddingVertical: moderateScale(16),
  },
  addUserButtonRow: {
    position: "absolute",
    left: 0,
    right: moderateScale(24),
    bottom: moderateScale(24),
    backgroundColor: "transparent",
    alignItems: "flex-end",
    zIndex: 10,
  },
});
