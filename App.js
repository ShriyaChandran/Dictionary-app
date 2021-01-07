import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,Alert} from 'react-native';
import {Header} from 'react-native-elements';
import Homescreen from './Screens/Homescreen';

export default class App extends React.Component{
  render(){
    return(
        <Homescreen/>
    )
  }
}