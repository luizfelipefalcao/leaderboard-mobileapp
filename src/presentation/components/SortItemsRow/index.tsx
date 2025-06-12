import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

type SortItemsRowProps = {
  sortByName: () => void;
  sortByPoints: () => void;
};

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

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: moderateScale(16),
    marginTop: moderateScale(12),
    marginHorizontal: moderateScale(16),
    width: "100%",
  },
  button: {
    borderWidth: moderateScale(1),
    borderColor: theme.colors.darkGray,
    borderRadius: moderateScale(999),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    backgroundColor: theme.colors.background,
  },
  buttonText: {
    color: theme.colors.darkGray,
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
});
