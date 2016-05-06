'use strict'

import React,{
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import {size,ArrowLeft,pixel,Header} from '../util'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userText:'',
            passwordText:'',
        }
    }
    linkToForget(){
        
    }
    linkToReg(){
        
    }
    otherLogin(type){
        
    }
    render(){
        return(
            <View style={styles.container}>
            <Header title='登录搞趣网' navigator={this.props.navigator} />
                <View style={styles.loginWrap}>
                    <View style={[styles.inputWrap,styles.inputBottom]}>
                        <Image
                            style={styles.inputIcon}
                            source={require('../images/userIcon.png')}
                        />
                        <TextInput     
                            style={styles.input}                   
                            underlineColorAndroid='transparent'
                            placeholder ={'邮箱账号或用户名'}
                            onChangeText={(userText) => this.setState({userText})}
                            value={this.state.userText}
                        />
                    </View>                    
                    <View style={styles.inputWrap}>
                        <Image
                            style={styles.inputIcon}
                            source={require('../images/passwordIcon.png')}
                        />
                        <TextInput 
                            style={styles.input}
                            underlineColorAndroid='transparent'
                            secureTextEntry={true}
                            placeholder ={'请输入密码'}
                            onChangeText={(passwordText) => this.setState({passwordText})}
                            value={this.state.passwordText}
                        />
                    </View>
                </View>
                <View style={styles.loginLink}>
                    <TouchableOpacity onPress={()=>this.linkToForget}>
                        <Text style={{fontSize:size(28)}}>忘记密码?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.linkToReg}  style={{marginLeft:size(26)}}>
                        <Text style={{fontSize:size(28)}}>快速注册</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>登录</Text>
                </TouchableOpacity>
                <Text style={styles.agreement}>登录即表示你已阅读并同意《用户服务协议》</Text>
                <View style={styles.otherTitleWrap}>
                    <View style={styles.otherTitleLine}></View>
                    <Text style={styles.otherTitleText}>其他方式登录</Text>
                </View>
                <View style={styles.otherLoginWrap}>
                    <TouchableOpacity style={styles.otherLoginButton} onPress={(qq)=>this.otherLogin(qq)}>
                        <Image 
                            style={styles.otherLoginIcon}
                            source={require('../images/loginIconQQ.png')}
                        />
                        <Text>QQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherLoginButton} onPress={(wb)=>this.otherLogin(wb)}>
                        <Image 
                            style={styles.otherLoginIcon}
                            source={require('../images/loginIconWb.png')}
                        />
                        <Text>微博</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherLoginButton} onPress={(wx)=>this.otherLogin(wx)}>
                        <Image 
                            style={styles.otherLoginIcon}
                            source={require('../images/loginIconWx.png')}
                        />
                        <Text>微信</Text>
                    </TouchableOpacity>
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
    
    /* 输入 */
    loginWrap:{
        marginHorizontal:size(26),
        marginVertical:size(40),
        backgroundColor:'#fff',    
        borderWidth:1,
        borderColor:'#d5d6d8',
        borderRadius:size(5),  
    },
    inputWrap:{
        height:size(104),
        alignItems:'center',
        paddingHorizontal:size(30),
        flexDirection:'row',
    },
    inputBottom:{
        borderBottomWidth:1,
        borderBottomColor:'#d5d6d8',
    },
    input:{
        fontSize:size(30),   
        flex:1,     
    },
    inputIcon:{
        width:size(30),
        height:size(30),
        marginRight:size(30),
    },
    loginLink:{
        flexDirection:'row',
        alignItems:'center',
        height:size(28),
        justifyContent:'flex-end',
        marginRight:size(26),
    },
    loginButton:{
        marginTop:size(90),
        backgroundColor:'#59afff',
        height:size(78),
        borderRadius:size(35),
        alignItems:'center',
        justifyContent:'center',   
        marginHorizontal:size(50),     
    },
    loginButtonText:{
        color:'#fff',
        fontSize:size(38),
    },
    agreement:{
        fontSize:size(24),
        textAlign:'center',
        marginTop:size(10),
    },
    
    /**底部 */
    otherTitleWrap:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:size(90),
    },
    otherTitleLine:{
        backgroundColor:'#ccc',
        height:1,   
        width:size(640),
        position:'absolute',
        top:size(15),
    },    
    otherTitleText:{
        fontSize:size(24),
        color:'#000',
        paddingHorizontal:size(10),
        textAlign:'center',
        backgroundColor:'#ebedf0',
    },
    otherLoginWrap:{
        marginTop:size(75),
        marginHorizontal:size(50),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    otherLoginIcon:{
        width:size(114),
        height:size(114),
        marginBottom:size(10),
    },
    otherLoginButton:{
        flex:1,
        alignItems:'center',
    },
})