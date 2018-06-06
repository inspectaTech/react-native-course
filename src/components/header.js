//Import libraries for making a component
import React from 'react';
import {Text} from 'react-native';

//Make a component
//variable named same as file
const Header = () => {
  //single lines return doesn't need ()
  return <Text>Albums</Text>;
};

//Make the component availabe to other parts of the App
export default Header;
