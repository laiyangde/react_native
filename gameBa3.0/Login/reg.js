'use strict'

import React,{
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
    Alert,
} from 'react-native'

import {size,ArrowLeft,pixel} from '../util'

export default class Logout extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }   
    
    render(){        
        return(
            <View style={styles.container}>            
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.headerBack}>
                        <ArrowLeft />
                    </TouchableOpacity>
                    <View style={styles.headerTitle}>
                        <Text style={styles.title}>注册</Text>
                    </View>
                </View>                    
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ebedf0',
    },
    /* 头部 */
    header:{
        height:size(88),
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
    },
    headerBack:{
        width:size(88),
        alignItems:'center',
    },
    headerTitle:{
        flex:1, 
        alignItems:'center', 
        marginLeft:-size(88),      
    },
    title:{
        fontSize:size(40),
        color:'#000'
    },        
      
    
})