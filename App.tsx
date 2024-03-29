import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Navbar from './src/components/Navbar';
import TodoList from './src/components/TodoList';
import ThemeContextProvider from './src/contexts/ThemeContex';
import AuthContextProvider from './src/contexts/AuthContext';

export default function App() {
  return (
    <View>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>
      </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({});
