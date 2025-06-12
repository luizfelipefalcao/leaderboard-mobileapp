import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

type AddUserButtonProps = {
  showAddForm: boolean;
  setShowAddForm: (show: boolean) => void;
};

function AddUserButton({ showAddForm, setShowAddForm }: AddUserButtonProps) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={[styles.button, showAddForm ? styles.cancelButton : styles.addButton]} onPress={() => setShowAddForm(showAddForm)}>
          <Text style={[styles.buttonText, showAddForm ? styles.cancelText : styles.addText]}>{showAddForm ? "Cancel" : "+ Add User"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddUserButton;

const styles = StyleSheet.create({
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
