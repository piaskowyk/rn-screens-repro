import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from 'react-native-screens/native-stack'; // nie działa
// } from '@react-navigation/native-stack'; // działa

const Stack = createNativeStackNavigator();

function Screen1({ navigation }: NativeStackScreenProps<ParamListBase>) {
  return (
    <View style={styles.flexOne}>
      <View style={styles.redBox} />
      <Button title="Screen2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

function Screen2({ navigation }: NativeStackScreenProps<ParamListBase>) {
  return (
    <View style={styles.flexOne}>
      <View style={styles.greenBox} />
      <Button title="Screen1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
}

function NestedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="NestedStack"
        component={NestedStack}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 50,
  },
  redBox: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});
