import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,Alert} from 'react-native';
import {Header} from 'react-native-elements';

export default class Homescreen extends React.Component{
    constructor(){
        super()
        this.state = {
            text:''
        }
    }
    getWord=(word)=>{
        var searchKeyword=word.toLowerCase();
        var url= "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
        return fetch(url)
        .then ((data)=>{
            if(data.status===200){
                return data.json()
            }
            else{
                return null
            }
        }) 
        .then((response)=>{
            var responseObject = response
            /*alert(responseObject);*/
            if(responseObject){
                var wordData = responseObject.definitions[0]
                var definition= wordData.description;
                var lexicalCategory = wordData.wordType
                /*alert(definition);*/
                this.setState({
                    "word": this.state.text,
                    "definition": definition,
                    "lexicalCategory": lexicalCategory
                })
            }
            else{
                this. setState({
                    "word": this.state.text,
                    "definition": "Not Found"
                })
            }
        })
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TextInput 
                    style={styles.inputBox}
                    value= {this.state.text}
                    onChangeText={(text)=>{
                        this.setState({
                            text:text
                        })
                    }}
                />
                <TouchableOpacity
                onPress = {()=>{
                    this.getWord(this.state.text)
                }}>
                    <Text style={styles.searchButton}>Search </Text>
                </TouchableOpacity>
                <Text>{this.state.definition} </Text>
                <Text style={{justifyContent:'center'}}> {this.state.lexicalCategory} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        width:'80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
    },
    searchButton: {
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
      }
})
