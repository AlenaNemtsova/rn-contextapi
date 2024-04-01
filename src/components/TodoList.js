import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContex';
import { TodoListContext } from '../contexts/TodoListContext';

const TodoList = () => {
    const [todo, setTodo] = useState('')
    const { isDarkTheme, lightTheme, darkTheme, buttonText, changeTheme } = useContext(ThemeContext);
    const { todos, dispatch } = useContext(TodoListContext);

    const handleChange = (text) => {
        setTodo(text)
    }

    const handleAddTodoPress = () => {
        dispatch({ type: 'ADD_TODO', text: todo });
        setTodo('');
    }

    const handleRemoveTodo = (id) => {
        dispatch({ type: 'REMOVE_TODO', id: id });
    }

    const theme = isDarkTheme ? darkTheme : lightTheme;

    const { todoContainer, listItem, buttonContainer, input } = styles;

    return (
        <View style={[todoContainer, theme]}>
            {
                todos.length ? (
                    <FlatList
                        data={todos}
                        keyExtractor={(todo) => todo.id}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => { handleRemoveTodo(item.id) }} >
                                    <Text style={[listItem, theme]}>{item.text}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (<Text style={[listItem, theme]}>You have no todos</Text>)
            }
            <TextInput
                value={todo}
                style={input}
                onChangeText={(text) => handleChange(text)} />
            <TouchableOpacity
                style={buttonContainer}
                onPress={handleAddTodoPress}>
                <Text style={buttonText}>Add New Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={buttonContainer}
                onPress={changeTheme}>
                <Text style={buttonText}>Change Theme</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoList;


const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: 'dimgray',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },
    listItem: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 10,
    },
    buttonContainer: {
        backgroundColor: 'dodgerblue',
        paddingVertical: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 15,
        padding: 5
    }

})