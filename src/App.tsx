import React from "react";
import { View, Text } from "react-native";
import { theme } from "./presentation/theme";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: theme.colors.background }}>
    <Text>Welcome to the Leaderboard App!</Text>
  </View>
);

export default App;
