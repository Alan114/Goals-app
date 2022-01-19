import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleGoalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          onChangeText={handleGoalInput}
          value={enteredGoal}
        />
        <Button
          title="ADD"
          onPress={props.handleAddGoal.bind(this, enteredGoal)}
          // onPress={() => props.handleAddGoal(enteredGoal)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
