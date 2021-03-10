import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class  extends Component {
    state = {
        names: [
            {
            id: 0,
            name: 'Ben',
            },
            {
            id: 1,
            name: 'Susan',
            },
            {
                id: 3,
                name: 'Mary',
            }
               
        ]               
    };
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {
                id: 0,
                name: 'Ben',
                },
                {
                id: 1,
                name: 'Susan',
                },
                {
                    id: 3,
                    name: 'Mary',
                }
                   
            ]               
        };
    }

   
    
    componentWillReceiveProps(nextProps) {
        
    }
    
    render() {
        return (
            <View >
                {
                    this.state.names.map((data,index)=>{
                        
                         return    <TouchableOpacity style={styles.container} key={index}>
                         <Text style={styles.text}>{data.name}</Text>
                     </TouchableOpacity>
                        
                    })
                }
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        alignItems: 'center',
               backgroundColor: '#d9f9b1',
    },
    text:{
       
        color:'#4f603c'

    }
});
