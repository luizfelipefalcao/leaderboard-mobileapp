import React from "react";
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native";

import { styles } from "./styles";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type User = { _id?: string; name: string; age: number; points: number; address: string };

type UserListProps = {
  users: User[];
  onUserClick: (user: User) => void;
  onDelete: (index: number, id: string | undefined) => void;
  onIncrement: (index: number) => void;
  onDecrement: (index: number) => void;
  searchTerm: string;
  selectedUser: User | null;
  setSearchTerm: (value: string) => void;
};

function UserDetails({ selectedUser, user }: { selectedUser: User | null; user: User }) {
  if (selectedUser !== user) return <View />;
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>Name: {user?.name}</Text>
      <Text style={styles.detailsText}>Age: {user?.age}</Text>
      <Text style={styles.detailsText}>Points: {user?.points}</Text>
      <Text style={styles.detailsText}>Address: {user?.address}</Text>
    </View>
  );
}

function UserList({ users, searchTerm, selectedUser, onUserClick, onDelete, onIncrement, onDecrement }: UserListProps): React.ReactElement {
  const renderUserList = users
    ?.filter((user) => user?.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ?.map((user) => {
      const isSelected = selectedUser === user;
      return (
        <View key={user?.name + user?.address} style={styles.wrapper}>
          <TouchableOpacity
            style={styles.userRow}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              onUserClick(user);
            }}
            activeOpacity={0.8}
          >
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                onDelete(
                  users.findIndex((u) => u === user),
                  user._id ?? ""
                )
              }
              accessibilityLabel="Delete user"
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>

            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>{user?.name}</Text>
            </View>

            <TouchableOpacity style={styles.incrementButton} onPress={() => onIncrement(users.findIndex((u) => u === user))} accessibilityLabel="Increment points">
              <Text style={styles.incDecButtonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.decrementButton} onPress={() => onDecrement(users.findIndex((u) => u === user))} accessibilityLabel="Decrement points">
              <Text style={styles.incDecButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.pointsText}>{user?.points} points</Text>
          </TouchableOpacity>

          {isSelected && (
            <View style={styles.detailsWrapper}>
              <UserDetails user={user} selectedUser={selectedUser} />
            </View>
          )}
        </View>
      );
    });

  return <View>{renderUserList}</View>;
}

export default UserList;
