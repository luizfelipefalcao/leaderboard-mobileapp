import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

export const styles = StyleSheet.create({
  form: {
    marginTop: moderateScale(16),
    backgroundColor: theme.colors.lightGray,
    borderRadius: moderateScale(8),
    padding: moderateScale(16),
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    color: theme.colors.darkGray,
    marginBottom: moderateScale(12),
  },
  inputGroup: {
    marginBottom: moderateScale(12),
  },
  label: {
    fontSize: moderateScale(12),
    color: theme.colors.darkGray,
    marginLeft: moderateScale(4),
    marginBottom: moderateScale(4),
    fontWeight: "500",
    textAlign: "left",
  },
  input: {
    borderWidth: moderateScale(1),
    borderColor: theme.colors.mediumGray || theme.colors.lightGray,
    borderRadius: moderateScale(6),
    padding: moderateScale(8),
    fontSize: moderateScale(14),
    color: theme.colors.darkGray,
    backgroundColor: theme.colors.background,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: moderateScale(8),
  },
  submitButton: {
    borderWidth: moderateScale(1),
    borderColor: theme.colors.darkGreen,
    borderRadius: moderateScale(6),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    backgroundColor: theme.colors.lightGreen,
  },
  submitButtonText: {
    color: theme.colors.darkGreen,
    fontWeight: "600",
    fontSize: moderateScale(16),
  },
});
