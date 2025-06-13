import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

type SearchUserRowProps = { searchTerm: string; setSearchTerm: (value: string) => void };

function SearchUserRow({ searchTerm, setSearchTerm }: SearchUserRowProps): React.ReactElement {
  return (
    <View style={styles.row}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Search names..." placeholderTextColor={theme.colors.mediumGray} value={searchTerm} onChangeText={setSearchTerm} />

        {searchTerm ? (
          <TouchableOpacity style={styles.clearButton} onPress={() => setSearchTerm("")} accessibilityLabel="Clear search">
            <Text style={styles.clearIcon}>X</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default SearchUserRow;
