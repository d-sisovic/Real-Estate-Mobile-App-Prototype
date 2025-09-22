import React, { ReactNode, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

export type ThemedInputProps = {
  label?: string;
  placeholder?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconPress?: () => void;
};

const ThemedInput = ({
  label,
  placeholder = "",
  leftIcon,
  rightIcon,
  onRightIconPress,
}: ThemedInputProps) => {
  const [value, onSetValue] = useState<string>("");

  return (
    <>
      {label && (
        <ThemedText type="defaultSemiBold" style={styles.label}>
          {label}
        </ThemedText>
      )}

      <View style={styles.inputContainer}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={styles.input}
          onChangeText={onSetValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="rgba(106, 106, 106, 1)"
          textAlignVertical="center"
        />

        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(92, 92, 92, 1)",
    borderRadius: 10,
    minHeight: 51,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
    paddingHorizontal: 10,
    fontFamily: "PoppinsSemiBold",
  },
  leftIcon: {
    marginRight: 12,
  },
  rightIcon: {
    marginLeft: "auto",
  },
});

export default ThemedInput;
