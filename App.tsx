import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState } from 'react';
import React from 'react';
import ListTodo from './components/todo/list.todo';
import InputTodo from './components/todo/input.todo';
import { ITodo } from './types/model';
export default function App() {
  // State to manage the list of todos
  const [todoList, setTodoList] = useState<ITodo[]>([
  ]);

  // Function to add a new todo
  const addTodo = (title: string) => {
    const newTodo: ITodo = { id: todoList.length + 1, title };
    setTodoList((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <View style={styles.container}>
      {/* Input for adding new todos */}
      <InputTodo onAddToDo={addTodo} />

      {/* Todo list display */}
      <ListTodo todoList={todoList} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});