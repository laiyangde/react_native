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
            animated: true,
            modalVisible: false,
            transparent: false,
        }
    }    
    logout(){
        Alert.alert(
            '确定要注销当前账号？',
            null,
            [
              {text: '取消', onPress: () => {return false}},
              {text: '确定',onPress: ()=> {
                  AsyncStorage.removeItem('userInfo').done(()=>{ 
                      this.props.navigator.pop();
                      this.props.refreshLoad(false);          
                      }
                  )
                }
              }
            ]
          )
    }
    render(){        
        return(
            <View style={styles.container}>            
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.headerBack}>
                        <ArrowLeft />
                    </TouchableOpacity>
                    <View style={styles.headerTitle}>
                        <Text style={styles.title}>系统设置</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={()=>this.logout()}>
                    <Text style={styles.loginButtonText}>退出登录</Text>
                </TouchableOpacity>       
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
    logoutButton:{
        marginTop:size(20),
        backgroundColor:'#fff',
        height:size(50),
        justifyContent:'center',
        alignItems:'center',
    },
    loginButtonText:{
        fontSize:size(24),
        color:'#ED4B48'
    },    
    
})