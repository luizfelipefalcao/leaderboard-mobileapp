import React from "react";
import { SafeAreaView } from "react-native";
import LeaderboadScreen from "./presentation/screens/Leaderboard";
import { theme } from "./presentation/theme";

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
    <LeaderboadScreen />
  </SafeAreaView>
);

export default App;
