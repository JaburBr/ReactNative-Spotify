import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styles from './styles';

const Main = ({
  params,
}) => (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Text>Main</Text>
    </View>
  );

Main.navigationOptions = {
  title: 'Sua Bilioteca',
}

export default Main;
