import React from "react";
import { Modal as RNModal, View, TouchableWithoutFeedback, Keyboard } from "react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

interface ModalProps {
  visible: boolean;
  onRequestClose?: () => void;
  children: React.ReactNode;
}

const Modal = ({ visible, onRequestClose, children }: ModalProps) => (
  <RNModal visible={visible} animationType="slide" presentationStyle="formSheet" onRequestClose={onRequestClose} style={{ backgroundColor: theme.colors.background }}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.content}>
        <View style={{ width: "100%" }}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  </RNModal>
);

export default Modal;
