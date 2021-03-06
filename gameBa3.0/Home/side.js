'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    AsyncStorage,
    Platform,
} from 'react-native'

import {size,styles as styles0,pixel} from '../util'
import Login from '../Login'
import Logout from '../Login/logout'
var ImagePickerManager = require('NativeModules').ImagePickerManager

export default class SideRender extends Component{
    constructor(props) {
        super(props);
        this.state = {            
            loaded: false,
            photoUrl:' ',
            hasMessege:true,
            nickName:' ',
            Extcredits:0,
        };
    }
    
    componentDidMount(){
        // AsyncStorage.getItem('userInfo').then((data)=>{
        //   let result = JSON.parse(data.slice(1,-1));
        //   console.log(result)
        //   this.setState({
        //       loaded:true,
        //       nickName:result.Data.NickName,
        //       Extcredits:result.Data.BbsInfo.Extcredits5,
        //       photoUrl:result.Data.PhotoUrl,
        //   })
        // }).catch((err)=>{
        //     console.log(err)
        // }) 
    }
    pressFunc(){
        
    }
    refreshLoad=(loadState)=>{
        this.setState({
            loaded:loadState
        })
    }
    pressSetup=()=>{
        this.props.navigator.push({            
            passProps:{refreshLoad:this.refreshLoad}, 
            component: Logout,           
         })
    }
    pressToLogin=()=>{
        if(this.state.loaded){
            this.pressPhoto;
        }else{
          this.props.navigator.push({              
            passProps:{refreshLoad:this.refreshLoad},
            component: Login, 
         })  
        }
         
    }
    photoRender(){
        if(this.state.loaded&&this.state.photoUrl!=''){
            return(
                <Image 
                    style={styles.photo}
                    source={{uri:this.state.photoUrl}}
                />
            )
        }else{
            return(
                <Image 
                    style={styles.photo}
                    source={require('../images/photoDefault.png')}
                /> 
            )                                       
        }
    }
    pressPhoto=()=>{
        const options = {
            title: '头像选取',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '相册',
            quality: 0.5,
            maxWidth: 300,
            maxHeight: 300,
            storageOptions: {
                skipBackup: true
            },
            allowsEditing: true
        };

        ImagePickerManager.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePickerManager Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // You can display the image using either:
                //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
                var source;
                this.setState({
                    photoUrl: 'data:image/jpeg;base64,' + response.data
                });
            }
        });
    }
    infoRender(){
        if(this.state.loaded){            
            return(
                <TouchableOpacity>
                    <View style={styles.info}>
                        <View style={[styles0.flex,styles0.center]}><Text style={styles.name}>{this.state.nickName}</Text></View>                         
                        <View style={[styles0.flex],{justifyContent:'center'}}><Text style={styles.infoGd}>镐豆: <Text style={styles.textColorRed}>{this.state.Extcredits}</Text></Text></View>
                    </View>
                </TouchableOpacity>
            )
        }else{
           return(
               <TouchableOpacity onPress={()=>this.pressToLogin()}>                         
                    <View style={styles.info}>
                        <View style={[styles0.flex,styles0.center]}><Text style={styles.name}>点击登陆</Text></View>
                    </View>
                </TouchableOpacity>
            )
        }                            
        
    }   
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={styles.sideBg}
                    source={require('../images/sideBg.png')}
                />
                <View style={styles.userWrap}>


                    <TouchableOpacity  onPress={() => this.pressToLogin()}>
                        <View style={styles.photoWrap}>
                            <Image 
                                style={styles.photoBg}
                                source={require('../images/photoBg.png')}
                            />
                             {this.photoRender() } 
                        </View>
                    </TouchableOpacity>
                    {this.infoRender()}
                    
                </View>
                    <View style={styles.moneyWrap}>
                        <View style={styles.moneyItem}>                 
                            <TouchableHighlight underlayColor={'rgba(255,255,255,0.3)'} style={[styles0.flex]} onPress={this.pressPhoto}>
                                <View style={[styles0.flex,styles0.center]}>
                                    <Text style={styles.moneyItemText}>1</Text>
                                    <Text style={styles.moneyItemName}>购物车</Text>
                                </View>                            
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#9a8fa0'} style={[styles0.flex]} onPress={()=>this.pressFunc()}>
                                <View style={[styles0.flex,styles0.center]}>
                                    <Text style={styles.moneyItemText}>2</Text>
                                    <Text style={styles.moneyItemName}>钱包</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#9a8fa0'} style={[styles0.flex]} onPress={()=>this.pressFunc()}>
                                <View style={[styles0.flex,styles0.center]}>
                                    <Text style={styles.moneyItemText}>0</Text>
                                    <Text style={styles.moneyItemName}>红包</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <ScrollView style={styles0.flex}>
                        <TouchableHighlight underlayColor={'#9a8fa0'} style={[styles0.flex]} onPress={()=>this.pressFunc()}>
                            <View style={styles.sideItem}>
                                <Image
                                    style={styles.sideItemIcon}
                                    source={require('../images/sideIcon01.png')}
                                />
                                <Text style={styles.sideItemName}>礼包</Text>
                                <Image
                                    style={styles.sideRightArrow}
                                    source={require('../images/rightArrowWhite.png')}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={'#9a8fa0'} style={[styles0.flex]} onPress={()=>this.pressFunc()}>
                            <View style={styles.sideItem}>
                                <Image
                                    style={styles.sideItemIcon}
                                    source={require('../images/sideIcon02.png')}
                                />
                                <Text style={styles.sideItemName}>礼券</Text>
                                <Image
                                    style={styles.sideRightArrow}
                                    source={require('../images/rightArrowWhite.png')}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={'#9a8fa0'} style={[styles0.flex]} onPress={()=>this.pressFunc()}>
                            <View style={styles.sideItem}>
                                <Image
                                    style={styles.sideItemIcon}
                                    source={require('../images/sideIcon03.png')}
                                />
                                <Text style={styles.sideItemName}>消息</Text>
                                <View style={styles.sideItemTip}>
                                    <View style={[styles0.flex,styles0.center]}>
                                        <View style={this.state.hasMessege?styles.hasMessege:null}></View>
                                        <Text style={styles.sideItemTipText}>
                                            <Text style={styles.textColorWhite}>6</Text>个消息未读
                                        </Text>
                                    </View>
                                </View>
                                <Image
                                    style={styles.sideRightArrow}
                                    source={require('../images/rightArrowWhite.png')}
                                />
                                </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={'#9a8fa0'} style={[styles0.flex]} onPress={()=>this.pressFunc()}>
                            <View style={styles.sideItem}>
                                <Image
                                    style={styles.sideItemIcon}
                                    source={require('../images/sideIcon04.png')}
                                />
                                <Text style={styles.sideItemName}>游戏管理</Text>
                                <Image
                                    style={styles.sideRightArrow}
                                    source={require('../images/rightArrowWhite.png')}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={'#9a8fa0'} style={[styles0.flex]} onPress={()=>this.pressFunc()}>
                            <View style={styles.sideItem}>
                                <Image
                                    style={styles.sideItemIcon}
                                    source={require('../images/sideIcon05.png')}
                                />
                                <Text style={styles.sideItemName}>发现</Text>
                                <View style={styles.sideItemTip}>
                                    <View style={[styles0.flex,styles0.center]}>
                                        <Text style={styles.sideItemTipText}>
                                        装机必备
                                        </Text>
                                    </View>
                                </View>
                                <Image
                                    style={styles.sideRightArrow}
                                    source={require('../images/rightArrowWhite.png')}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={'#9a8fa0'} onPress={()=>this.pressFunc()}>
                            <View style={styles.help}>
                                <View style={styles.sideItem}>
                                    <Image
                                        style={[styles.sideItemIcon,{marginLeft:-size(30)}]}
                                        source={require('../images/sideIcon06.png')}
                                    />
                                    <Text style={styles.sideItemName}>帮助与客服</Text>                            
                                    <Image
                                        style={styles.sideRightArrow}
                                        source={require('../images/rightArrowWhite.png')}
                                    />
                                </View>
                            </View>
                        </TouchableHighlight> 
                        <TouchableHighlight underlayColor={'#9a8fa0'} onPress={()=>this.pressSetup()}>
                            <View style={styles.sideItem}>
                                <Image
                                    style={styles.sideItemIcon}
                                    source={require('../images/sideIcon07.png')}
                                />
                                <Text style={styles.sideItemName}>设置</Text>
                            </View>
                        </TouchableHighlight> 
                    </ScrollView>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,      
    },
    sideBg:{
        width:size(500),
        position:'absolute',
        top:0,
        left:0,
        resizeMode:'stretch',
    },
    /* 个人信息 */
    userWrap:{
        marginTop:size(80),
        height:size(124),
        flexDirection:'row',      
    },
    photoWrap:{
        width:size(120),
        marginRight:size(22),
        marginLeft:size(30),
    },
    photoBg:{
        width:size(120),
        height:size(120),
        position:'absolute',
        top:0,
        left:0,
    },
    photo:{
        marginLeft:size(5),
        marginTop:size(5),
        width:size(110),
        height:size(110),
        borderRadius:size(110),
    },
    info:{
        height:size(120),
        paddingVertical:size(15)        
    },    
    name:{
        fontSize:size(32),
        color:"#f9f9fa",
    },
    infoGd:{
        color:'#afb2ba',
        fontSize:size(24), 
    },
    textColorRed:{
        color:'#eb4343',
    },
    
    /* 购物车红包 */    
    moneyWrap:{
        marginLeft:size(30),
        borderTopWidth:pixel,
        borderTopColor:'#8a8aa2',  
        borderBottomWidth:pixel,
        borderBottomColor:'#8a8aa2',            
    },
    moneyItem:{   
        flex:1,  
        marginRight:size(30),    
        flexDirection:'row',
        height:size(124),       
    },
    moneyItemText:{
        color:'#fff',
        fontSize:size(36),
    },
    moneyItemName:{
        color:'#bcbec7',
        fontSize:size(24),
    },
    
    /* 栏目 */
    sideItem:{
        marginLeft:size(30),
        marginRight:size(30),
        flex:1,
        flexDirection:'row',
        height:size(90),
        alignItems:'center',
    },
    sideItemIcon:{
        width:size(40),
        height:size(40),
        marginRight:size(20),
    },
    sideItemName:{
        fontSize:size(24),
        color:'#fff',
    },
    sideRightArrow:{
        width:size(30),
        height:size(30),
        position:'absolute',
        right:0,
        top:size(30),
    },
    sideItemTip:{
        height:size(48),
        position:'absolute',
        right:size(40),
        top:size(20),
        borderRadius:size(20),
        backgroundColor:'rgba(255,255,255,0.1)',
        padding:size(14),
    },
    sideItemTipText:{
        color:'#cec9cf',
        fontSize:size(26),
    },
    textColorWhite:{
        color:'#fff',
    },
    help:{
        marginLeft:size(30),
        borderTopWidth:pixel,
        borderTopColor:'#f2f2f2',
        borderBottomWidth:pixel,
        borderBottomColor:'#f2f2f2',
    },
    hasMessege:{
        width:size(10),
        height:size(10),
        backgroundColor:'#e03e3f',
        borderRadius:size(10),
        position:'absolute',
        top:-size(15),
        right:-size(15),
    },
});