import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContex';
import { TodoListContext } from '../contexts/TodoListContext';

const TodoList = () => {
    const { isDarkTheme, lightTheme, darkTheme, buttonText, changeTheme } = useContext(ThemeContext);
    const { todos } = useContext(TodoListContext);

    const theme = isDarkTheme ? darkTheme : lightTheme;

    const { todoContainer, listItem, buttonContainer } = styles;

    return (
        <View style={[todoContainer, theme]}>
            {
                todos.length ? (
                    <FlatList
                        data={todos}
                        keyExtractor={(todo) => todo.id}
                        renderItem={({ item }) => {
                            return (
                                <Text style={[listItem, theme]}>{item.text}</Text>
                            )
                        }}
                    />
                ) : (<Text style={[listItem, theme]}>You have no todos</Text>)
            }
            <TouchableOpacity style={buttonContainer} onPress={changeTheme}>
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
        justifyContent: 'space-around'
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
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }

})