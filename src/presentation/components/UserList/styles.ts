import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: theme.colors.lightGray,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
    marginBottom: moderateScale(8),
    backgroundColor: theme.colors.background,
  },
  deleteButton: {
    width: moderateScale(32),
    height: moderateScale(32),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: theme.colors.darkRed,
    borderRadius: moderateScale(8),
    marginRight: moderateScale(8),
    backgroundColor: theme.colors.lightRed,
  },
  deleteButtonText: {
    color: theme.colors.darkRed,
    fontWeight: "bold",
    fontSize: moderateScale(16),
  },
  nameContainer: {
    width: moderateScale(100),
    justifyContent: "center",
    marginRight: moderateScale(12),
  },
  nameText: {
    color: theme.colors.darkGray,
    fontWeight: "bold",
    fontSize: moderateScale(14),
  },
  incrementButton: {
    width: moderateScale(32),
    height: moderateScale(32),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: theme.colors.darkGreen,
    borderRadius: moderateScale(8),
    marginRight: moderateScale(12),
    backgroundColor: theme.colors.lightGreen,
  },
  decrementButton: {
    width: moderateScale(32),
    height: moderateScale(32),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: theme.colors.darkBlue,
    borderRadius: moderateScale(8),
    marginRight: moderateScale(8),
    backgroundColor: theme.colors.lightBlue,
  },
  incDecButtonText: {
    color: theme.colors.darkGray,
    fontWeight: "bold",
    fontSize: moderateScale(18),
  },
  pointsText: {
    color: theme.colors.darkGray,
    fontWeight: "bold",
    fontSize: moderateScale(14),
    width: moderateScale(70),
    textAlign: "center",
  },
  detailsWrapper: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: moderateScale(8),
    marginVertical: moderateScale(4),
    padding: moderateScale(8),
  },
  detailsContainer: {
    gap: moderateScale(4),
  },
  detailsText: {
    color: theme.colors.darkGray,
    fontSize: moderateScale(12),
    fontWeight: "600",
    textAlign: "left",
  },
});
