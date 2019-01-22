/*this works for a project bootstrapped with "react-native init"
I wanted to use expo for development, so I used "expo init" instead, and so the actual
functional code here is different.*/

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
    <Text>Some Text</Text>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
