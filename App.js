import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Navbar from './src/components/Navbar';
import TodoList from './src/components/TodoList';
import ThemeContextProvider from './src/contexts/ThemeContex';
import AuthContextProvider from './src/contexts/AuthContext';
import TodoListContextProvider from './src/contexts/TodoListContext';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <TodoListContextProvider>
            <Navbar />
            <TodoList />
          </TodoListContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({});
