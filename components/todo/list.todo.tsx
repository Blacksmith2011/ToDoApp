import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { ITodo } from "../../types/model";

interface IProps {
  todoList: ITodo[];
}

const ListTodo = (props: IProps) => {
    const { todoList } = props;
  return (
    <FlatList
      style={styles.list}
      data={todoList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text style={styles.todo}>{item.title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
  },
  todo: {
    fontSize: 16,
    backgroundColor: "violet",
    marginBottom: 10,
    padding: 10,
  },
});

export default ListTodo;

