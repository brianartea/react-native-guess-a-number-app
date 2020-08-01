# Guess a Number Game App

This is a React Native simple game app I learned from an online course. Branch 27 has a finished version in zip format.

Download Node if you have not:
https://nodejs.org/en/download/

Type or copy and paste the commands below in the Terminal/Cmd-line or Git Bash

See if you have Node already or installed correctly. Type in Terminal:

```bash
node -v
```

Assuming that you have Node 12 LTS or greater installed, you can use npm to install the Expo CLI command line utility exactly like below:

```bash
npm install -g expo-cli
```

Get project started and to load the starting node-modules and other dependancies:

```bash
expo init ProjectName
```

 I put my actual fonts into: assets/fonts/

```bash
expo install expo-font
```

I opened the project folder in VS Code and used the built in Terminal. The command to open VS Code's Terminal directly below, I have mine set up in bash.

```bash
Ctrl + `
```

```bash
npm start 
```

//you can also use: 

```bash
expo start
```

The above will start a development server for you and open up default browser with camera code to open expo on iphone.

Also download Android Studio for ios and android simulators.
https://developer.android.com/studio

Boilerplate example in most pages/components below.

```bash
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YourComponent = props => {
  return (
    
  );
};

const styles = StyleSheet.create({
  
});

export default YourComponent;
```
