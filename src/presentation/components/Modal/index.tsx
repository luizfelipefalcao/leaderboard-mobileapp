import React from "react";
import { Modal as RNModal, View, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native";

import { styles } from "./styles";
import { theme } from "../../theme";

interface ModalProps {
  visible: boolean;
  onRequestClose?: () => void;
  children: React.ReactNode;
}

const Modal = ({ visible, onRequestClose, children }: ModalProps) => (
  <RNModal visible={visible} animationType="slide" presentationStyle="formSheet" onRequestClose={onRequestClose} style={{ backgroundColor: theme.colors.background }}>
    <View style={styles.content}>
      <KeyboardAvoidingView behavior="padding" style={{ width: "100%" }}>
        <View style={styles.iconClose}>
          <TouchableOpacity onPress={onRequestClose}>
            <Text style={styles.iconCloseText}>x</Text>
          </TouchableOpacity>
        </View>

        {children}
      </KeyboardAvoidingView>
    </View>
  </RNModal>
);

export default Modal;
