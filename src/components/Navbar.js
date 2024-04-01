import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContex';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { isDarkTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const { headerContainer, headerText, headerTabContainer, headerTab } = styles;

    return (
        <View style={[headerContainer, theme]}>
            <Text style={[headerText, theme]}>ToDo List</Text>
            <TouchableOpacity onPress={changeAuthStatus}>
                <Text style={[headerText, theme]}>{isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
            </TouchableOpacity>
            <View style={headerTabContainer}>
                <Text style={headerTab}>Overview</Text>
                <Text style={headerTab}>Contact</Text>
                <Text style={headerTab}>Support</Text>
            </View>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'dimgrey',
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 25,
    },
    headerText: {
        marginTop: 25,
        fontSize: 28,
        color: 'white'
    },
    headerTabContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 25,
        backgroundColor: 'lightgrey',
        alignSelf: 'flex-end',
    },
    headerTab: {
        fontSize: 22,
        paddingVertical: 10
    }
})
