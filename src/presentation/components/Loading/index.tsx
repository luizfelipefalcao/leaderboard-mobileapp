import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { theme } from "../../theme";
import { moderateScale } from "../../utils";

const Loading = ({ text = "Loading..." }: { text?: string }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color={theme.colors.darkBlue} />
    <Text style={{ marginTop: moderateScale(12), color: theme.colors.darkGray, fontSize: moderateScale(16) }}>{text}</Text>
  </View>
);

export default Loading;
