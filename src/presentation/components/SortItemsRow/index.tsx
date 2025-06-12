import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

type SortItemsRowProps = { sortByName: () => void; sortByPoints: () => void };

function SortItemsRow({ sortByName, sortByPoints }: SortItemsRowProps) {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={sortByName} accessibilityLabel="Sort by name">
        <Text style={styles.buttonText}>Sort By Name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={sortByPoints} accessibilityLabel="Sort by points">
        <Text style={styles.buttonText}>Sort By Points</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SortItemsRow;
