Download Node if you have not:
https://nodejs.org/en/download/

All in the Terminal/Cmd-line or Git Bash

See if you have Node already or installed correctly. Type in Terminal:

node -v

Assuming that you have Node 12 LTS or greater installed, you can use npm to install the Expo CLI command line utility exactly like below:

npm install -g expo-cli

Get project started and to load the starting node-modules and other dependancies:

expo init ProjectName

To make sure your custom fonts you install into your project folder work: assets/fonts in this case:

expo install expo-font

//Open project folder in VS Code and use the built in Terminal//

Ctrl + `

npm start 

//you can also use: 

expo start

//The above will start a development server for you and open up default browser with camera code to open expo on iphone.//

//Also download Android Studio for ios and android simulators.//

Boilerplate example in most pages/components

import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const MainButton = props => {
  return (
    
  );
  
};

const styles = StyleSheet.create({
  
});

export default MainButton;
