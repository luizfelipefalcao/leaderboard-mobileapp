import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { styles } from "./styles";

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
