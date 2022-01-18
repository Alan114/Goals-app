import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const handleGoalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          onChangeText={handleGoalInput}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
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
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
