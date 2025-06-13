import React, { useMemo } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

type User = { name: string; age: string | number; points: string | number; address: string };
type NewUserFormProps = {
  newUser: User;
  setNewUser: (value: any) => void;
  onSubmitForm: () => void;
  onCancelForm: () => void;
};

const NewUserForm = ({ newUser, onSubmitForm, onCancelForm, setNewUser }: NewUserFormProps) => {
  const isDisabled = useMemo(() => {
    return newUser.name === "" || newUser.age === "" || newUser.address === "" || Number(newUser.points) < 0 || newUser.age === "";
  }, [newUser]);

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Create a New User:</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={String(newUser?.name)}
          onChangeText={(value) => setNewUser({ ...newUser, name: value })}
          placeholder="Name"
          autoCorrect={false}
          autoComplete="off"
          spellCheck={false}
          placeholderTextColor={theme.colors.mediumGray}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={String(newUser.age)}
          onChangeText={(value) => setNewUser({ ...newUser, age: value })}
          placeholder="Age"
          placeholderTextColor={theme.colors.mediumGray}
          keyboardType="numeric"
          onFocus={() => setNewUser({ ...newUser, age: "" })}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Points</Text>
        <TextInput
          style={styles.input}
          value={String(newUser.points)}
          onChangeText={(value) => setNewUser({ ...newUser, points: value })}
          placeholder="Points"
          placeholderTextColor={theme.colors.mediumGray}
          keyboardType="numeric"
          onFocus={() => setNewUser({ ...newUser, points: "" })}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={String(newUser?.address)}
          onChangeText={(value) => setNewUser({ ...newUser, address: value })}
          placeholder="Address"
          autoCorrect={false}
          autoComplete="off"
          spellCheck={false}
          placeholderTextColor={theme.colors.mediumGray}
          onFocus={() => setNewUser({ ...newUser, address: "" })}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancelForm} accessibilityLabel="Cancel">
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.submitButton, isDisabled && { backgroundColor: theme.colors.background, borderColor: theme.colors.lightGray }]}
          onPress={onSubmitForm}
          accessibilityLabel="Submit"
          disabled={isDisabled}
        >
          <Text style={[styles.submitButtonText, isDisabled && { color: theme.colors.mediumGray }]}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewUserForm;
