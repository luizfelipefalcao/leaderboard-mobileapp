import React, { useCallback, useState, useEffect, useMemo } from "react";
import { View, ScrollView, Image } from "react-native";

import { UserService } from "../../../services/User";

import NewUserForm from "../../components/NewUserForm";
import SortItemsRow from "../../components/SortItemsRow";
import SearchUserRow from "../../components/SearchUserRow";
import UserList from "../../components/UserList";
import AddUserButton from "../../components/AddUserButton";
import Loading from "../../components/Loading";

import { styles } from "./styles";
import Modal from "../../components/Modal";
import { moderateScale } from "../../utils";

export type User = { _id?: string; name: string; age: number; points: number; address: string };

function LeaderboadScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUser, setNewUser] = useState<User>({ name: "", age: 0, points: 0, address: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const userList = await UserService.retrieveUsers();
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users", error);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = useCallback((index: number, id?: string) => {
    const processDeleteUser = async () => {
      try {
        setIsLoading(true);
        if (!id) return;
        await UserService.deleteUser(id);
        setUsers((prev) => prev.filter((_, i) => i !== index));
      } catch (error) {
        console.error("Error deleting user", error);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    processDeleteUser();
  }, []);

  const handleCleanAndShowAddForm = useCallback(() => {
    setNewUser({ name: "", age: 0, points: 0, address: "" });
    setShowAddForm(true);
  }, []);

  const handleCleanAndCloseAddForm = useCallback(() => {
    setNewUser({ name: "", age: 0, points: 0, address: "" });
    setShowAddForm(false);
  }, []);

  const handleSubmitForm = useCallback(() => {
    const addLocalUser = (new_user: User) => {
      setUsers((prev) => [...prev, new_user].sort((a, b) => b.points - a.points));
      setNewUser({ name: "", age: 0, points: 0, address: "" });
      setShowAddForm(false);
    };
    const processAddUser = async () => {
      try {
        setIsLoading(true);
        const new_user = await UserService.addUser(newUser);
        addLocalUser(new_user);
      } catch (error) {
        console.error("Error adding user", error);
      } finally {
        setTimeout(() => setIsLoading(false), 800);
      }
    };
    processAddUser();
  }, [newUser]);

  const handleIncrement = useCallback(
    (index: number) => {
      const updatedUsers = [...users].map((user, i) => (i === index ? { ...user, points: user?.points + 1 } : user));
      const sortedUsers = updatedUsers.sort((a, b) => b?.points - a?.points);
      setUsers(sortedUsers);
    },
    [users]
  );

  const handleDecrement = useCallback(
    (index: number) => {
      const updatedUsers = [...users].map((user, i) => (i === index ? { ...user, points: Math.max(0, user?.points - 1) } : user));
      const sortedUsers = updatedUsers.sort((a, b) => b?.points - a?.points);
      setUsers(sortedUsers);
    },
    [users]
  );

  const handleUserClick = useCallback(
    (user: User) => {
      setSelectedUser(selectedUser === user ? null : user);
    },
    [selectedUser]
  );

  const handleSortByName = useCallback(() => {
    const sorted = [...users].sort((a, b) => a?.name.localeCompare(b?.name));
    setUsers(sorted);
  }, [users]);

  const handleSortByPoints = useCallback(() => {
    const sorted = [...users].sort((a, b) => b?.points - a?.points);
    setUsers(sorted);
  }, [users]);

  const renderUserList = useMemo(() => {
    if (!users || users.length === 0) return null;
    return (
      <UserList
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onUserClick={handleUserClick}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        users={users}
        selectedUser={selectedUser}
      />
    );
  }, [handleDecrement, handleDelete, handleIncrement, handleUserClick, searchTerm, selectedUser, users]);

  const renderNewUserForm = useMemo(() => {
    if (!showAddForm || !newUser) return null;
    return <NewUserForm newUser={newUser} onSubmitForm={handleSubmitForm} setNewUser={setNewUser} onCancelForm={handleCleanAndCloseAddForm} />;
  }, [handleSubmitForm, newUser, showAddForm]);

  return (
    <View style={styles.screen}>
      <View style={styles.logoRow}>
        <Image source={require("../../assets/spring-logo.png")} style={styles.logo} resizeMode="contain" />
      </View>

      <SortItemsRow sortByName={handleSortByName} sortByPoints={handleSortByPoints} />
      <SearchUserRow searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <View style={styles.listWrapper}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Loading />
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {renderUserList}
          </ScrollView>
        )}
      </View>

      <View style={styles.addUserButtonRow}>
        <AddUserButton setShowAddForm={handleCleanAndShowAddForm} />
      </View>

      <Modal visible={showAddForm} onRequestClose={() => setShowAddForm(false)}>
        <View style={{ marginTop: -moderateScale(140) }}>{renderNewUserForm}</View>
      </Modal>
    </View>
  );
}

export default LeaderboadScreen;
