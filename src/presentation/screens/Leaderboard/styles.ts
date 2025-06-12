import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(8),
  },
  container: {
    backgroundColor: theme.colors.background,
    borderWidth: moderateScale(1),
    borderColor: theme.colors.lightGray,
    borderRadius: moderateScale(12),
    width: "100%",
    maxWidth: moderateScale(400),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "column",
    minHeight: moderateScale(600),
    maxHeight: moderateScale(750),
    overflow: "hidden",
  },
  logoRow: {
    width: "100%",
    alignItems: "center",
    marginTop: moderateScale(12),
    marginBottom: moderateScale(4),
  },
  logo: {
    height: moderateScale(60),
    width: moderateScale(60),
    marginBottom: moderateScale(4),
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
  },
});
