import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class  extends Component {

    state={
        email:"",
        password:""
    }
    constructor(props) {
        super(props);
       
    }
    
    componentWillReceiveProps(nextProps) {
        
    }
    
    handleEmail =(text)=>{
        this.setState({email:text})
    }

    handlePassword = (text)=>{
        this.setState({password:text})
    }

     summit=(email)=>{
        alert(this.state.email+this.state.password)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    style = {styles.input}
                    onChangeText={this.handleEmail}
                />

                <TextInput
                    style = {styles.input}
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    onChangeText={this.handlePassword}

                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={()=>{this.summit(this.state.email)}}
                >
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        },
       

        input: {
            
            margin: 15,
            height: 40,
            padding:15,
            borderColor: '#7a42f4',
            borderWidth: 1
            },

            container:{
                paddingTop:23,
            }
           
});
