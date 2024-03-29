import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContex';
import { AuthContext } from '../contexts/AuthContext';


export default class TodoList extends Component {
    static contextType = ThemeContext;

    render() {
        const { isDarkTheme, lightTheme, darkTheme, buttonText, changeTheme } = this.context;

        const theme = isDarkTheme ? darkTheme : lightTheme;

        const { todoContainer, item, buttonContainer } = styles;
        return (
            <View style={[todoContainer, theme]}>
                <Text style={[item, theme]}>Do some activity</Text>
                <Text style={[item, theme]}>Do some activity</Text>
                <Text style={[item, theme]}>Do some activity</Text>
                <TouchableOpacity style={buttonContainer} onPress={changeTheme}>
                    <Text style={buttonText}>Change Theme</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: 'dimgray',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    item: {
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