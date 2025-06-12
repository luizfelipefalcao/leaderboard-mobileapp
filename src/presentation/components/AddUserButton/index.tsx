import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { styles } from "./styles";

type AddUserButtonProps = {
  setShowAddForm: () => void;
};

function AddUserButton({ setShowAddForm }: AddUserButtonProps) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.button} onPress={setShowAddForm}>
          <Text style={styles.addText}>+ Add User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddUserButton;
