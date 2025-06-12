import React from "react";
import { View, StyleSheet } from "react-native";

import { theme } from "../../theme";
import { moderateScale } from "../../utils";

function SpaceLine() {
  return <View style={styles.line} />;
}

export default SpaceLine;

const styles = StyleSheet.create({
  line: {
    height: moderateScale(2),
    width: "100%",
    borderTopWidth: moderateScale(1),
    borderTopColor: theme.colors.lightGray,
    backgroundColor: theme.colors.background,
    marginBottom: -theme.spaces.margin,
  },
});
