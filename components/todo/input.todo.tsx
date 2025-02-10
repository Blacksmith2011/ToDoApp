import React from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

interface InputTodoProps {
    onAddToDo: (text: string) => void;
}

const InputTodo: React.FC<InputTodoProps> = ({onAddToDo}) => {

    const [text, setText] = useState('');

    const handleAdd = () => {
        onAddToDo(text);
        setText('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>  Input Todo</Text>
            <TextInput
                style={styles.input}
                value= {text}
                onChangeText={setText}
                onEndEditing={handleAdd}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleAdd}

            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: "center",
        width: '100%',
    },

    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,

    },

    text: {
        fontSize: 20,
    },

    button: {
        alignItems: "center",
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 10,
        width: '80%',
    }
});

export default InputTodo;