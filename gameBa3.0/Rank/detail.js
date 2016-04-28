'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native'

import {size10,size20,size24,size30,size40,size100,size200,size,styles as styles0,pixel} from '../util'

class DesContent extends Component{
    constructor(props) {
        super(props);
        this.state = {            
            showLine:3,
            rotate:'0deg'
        };
    }
    showLines(){
        if(this.state.showLine==3){
           this.setState({
                showLine:20,
                rotate:'180deg'
            }) 
        }else{
            this.setState({
                showLine:3,
                rotate:'0deg'
            })
        }
        
    }
    render(){
        return(
            <View style={[styles.desContent,styles.itemBorder]}>
                <View style={styles.desContentTop}>
                    <Text style={styles.desTitle}>内容提要</Text>
                    <TouchableOpacity style={styles.desShowLines} onPress={()=>this.showLines()}>
                        <Text>展开</Text>
                        <Image 
                            style={[styles.arrow,{transform:[{rotate:this.state.rotate}]}]}
                            source={require('../images/arrowDownGray.png')}
                         />
                    </TouchableOpacity>
                </View>
                <View style={styles.desTextWrap}>
                    <Text style={styles.desText} numberOfLines={this.state.showLine}>
                        50个经典关卡，30把史诗武器，10个超级Boss，1款带来前所未有爽快暴击感的射击游戏。末世！求生！杀戮！在这里你将无所不能！快来玩这激动人心50个经典关卡，30把史诗武器，10个超级Boss，1款带来前所未有爽快暴击感的射击游戏。末世！求生！杀戮！在这里你将无所不能！快来玩这激动人心
                    </Text>
                </View>
            </View>
        )
    }
}


export default class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {            
            productId:this.props.productId
        };
    }
    pressFunc(){
        // this.props.navigator.push({
    //   component: webview,
    //   title: data.recommendTitle,
    //   passProps: {recommendLink:data.recommendLink},
    //   backButton:true
    // })
    }   
    pressLink(){
        let url = 'http://112.65.222.35/dd.myapp.com/16891/ED7BD0719ED8F731623C49EECF9617FC.apk?mkey=571db438527b30cf&f=d688&fsname=com.tandy.android.appforgao7_2.1_215.apk&p=.apk'
        Linking.openURL(url).catch(err => console.error('地址错误', err));
    }  
    pressToRaider(){
        
    }
    pressToGift(){
        
    }
    shouldComponentUpdate(){
        return false;
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles0.flex}>
                    <View style={[styles.appInfoWrap,styles.itemBorder]}>
                        <View style={styles.appInfo}>
                            <Image 
                                style={styles.appIcon}
                                source={{uri:'http://file.gao7.com/g1/M00/4F/A5/wKgKxlTJlpmAa5a_AABwcVoAisE223.png'}}
                            />
                            <View style={[styles.appText,styles0.flex]}>
                                <View style={[styles.appNameWrap,styles0.center,styles0.flex]}>
                                    <Text style={styles.appName} numberOfLines={2}>僵尸猎人K-生化战士挑战街机极限</Text>
                                </View>
                                <View style={[styles.appTags,styles0.flex]}>
                                    <View style={styles.appTag}>
                                        <Text style={styles.appTagText}>标签</Text>
                                    </View>
                                    <View style={styles.appTag}>
                                        <Text style={styles.appTagText}>角色扮演</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.appDownload} onPress={()=>this.pressLink()}>
                                <View style={styles.appDownloadIconWrap}>
                                    <Image 
                                        style={styles.appDownloadIcon}
                                        source={require('../images/downloadIcon.png')}
                                    />
                                </View>
                                <View style={styles.appSizeWrap}>
                                    <Text style={styles.appSize} numberOfLines={1}>101.08MB</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.contentItemsWrap,styles.itemBorder]}>
                        <TouchableOpacity style={[styles0.flex,styles.contentItemLeft]} onPress={()=>this.pressToGift()}>
                            <View style={styles.contentTop}>
                                <Image 
                                    style={styles.topIcon}
                                    source={require('../images/detailIconGift.png')}
                                />
                                <View style={styles.contentNameWrap}>
                                    <Text style={[styles.contentName,{color:'#ff5555'}]}>最强礼包</Text>
                                </View>
                            </View>
                            <View style={styles.contentDes}>
                                <Text style={styles.contentDesText} numberOfLines={1}>最新上线:国庆独家礼包</Text>
                                <Text style={styles.contentDesText} numberOfLines={1}><Text style={{color:'#0071ff'}}>5</Text>个礼包，等你来抢</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles0.flex}  onPress={this.pressToRaider()}>
                            <View style={styles.contentTop}>
                                <Image 
                                    style={styles.topIcon}
                                    source={require('../images/detailIconNews.png')}
                                />
                                <View style={styles.contentNameWrap}>
                                    <Text style={[styles.contentName,{color:'#4faaff'}]}>攻略资讯</Text>
                                </View>
                            </View>
                            <View style={styles.contentDes}>
                                <Text style={styles.contentDesText} numberOfLines={1}>已收录:<Text style={{color:'#0071ff'}}>1789</Text>篇</Text>
                                <Text style={styles.contentDesText} numberOfLines={1}>最近更新:<Text style={{color:'#000000'}}>2015-10-07</Text></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <DesContent />
                    <View style={[styles.showPics,styles.itemBorder]}>
                        <View style={styles.showPicsTitleWrap}>
                            <Text style={styles.showPicsTitle}>精美截图</Text>
                        </View>                        
                        <ScrollView horizontal={true}>
                            <Image 
                                style={styles.showPic}
                                source={{uri:'http://a1.mzstatic.com/us/r30/Purple69/v4/b3/5d/cb/b35dcb46-fa4e-0e82-244b-fce152dc3067/screen320x480.jpeg'}}
                            />
                            <Image 
                                style={styles.showPic}
                                source={{uri:'http://a1.mzstatic.com/us/r30/Purple69/v4/05/58/ce/0558ceab-9e6b-e8ae-85a8-1eaae2d9de2d/screen320x480.jpeg'}}
                            />
                    </ScrollView>
                    </View>
                    <View style={[styles.devInfo,styles.itemBorder]}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>开发者信息</Text>
                        </View>
                        <View style={[styles.devLabelWrap,{marginBottom:size20}]}>
                            <Text style={styles.devLabel}>开发商</Text>
                            <Text numberOfLines={1}>上海游唐科技有限公司</Text>
                        </View>
                        <View style={styles.devLabelWrap}>
                            <Text style={styles.devLabel}>运营商</Text>
                            <Text numberOfLines={1}>云荣天尚</Text>
                        </View>
                    </View>
                    <View style={[styles.itemBorder,styles.itemRec,{marginBottom:size20}]}>
                        <View style={[styles.itemTitle,{marginLeft:size20}]}>
                            <Text style={styles.itemTitleText}>其他产品</Text>
                        </View>
                        <View style={styles.appList}>
                            <TouchableOpacity style={styles.app}>
                                <Image 
                                    style={styles.icon}
                                    source={{uri:'http://file.gao7.com/g1/M00/CB/02/CilEmlcHIpeAPb0iAAAN_QmEo2U852.jpg?w=114&h=114'}}
                                />
                                <View style={styles.nameWrap}>
                                    <Text style={styles.name} numberOfLines={1}>游戏吧</Text>
                                </View>                                
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.app}>
                                <Image 
                                    style={styles.icon}
                                    source={{uri:'http://filelx.gao7.com/g1/M00/CB/02/CilEmlcHIlSAAZsJAAAkc0GeW0Y124.jpg?w=150&h=150'}}
                                />
                                <View style={styles.nameWrap}>
                                    <Text style={styles.name} numberOfLines={1}>龙珠激斗</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.app}>
                                <Image 
                                    style={styles.icon}
                                    source={{uri:'http://file.gao7.com/g1/M00/CC/D7/CilEmVcHIi6AbkHJAAA0sE6mcYI795.jpg?w=512&h=512'}}
                                />
                                <View style={styles.nameWrap}>
                                    <Text style={styles.name} numberOfLines={1}>暗影之虫</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.app}>
                                <Image 
                                    style={styles.icon}
                                    source={{uri:'http://filelx.gao7.com/g1/M00/CB/00/CilEmlcHIYaANdo4AAC3Nm810zc132.jpg?w=512&h=512'}}
                                />
                                <View style={styles.nameWrap}>
                                    <Text style={styles.name} numberOfLines={1}>皇室战争</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.itemRec}>
                        <View style={[styles.itemTitle,{marginLeft:size20}]}>
                            <Text style={styles.itemTitleText}>相关推荐</Text>
                        </View>
                        <View style={styles.appList}>
                            <TouchableOpacity style={styles.app}>
                                <Image 
                                    style={styles.icon}
                                    source={{uri:'http://file.gao7.com/g1/M00/CB/02/CilEmlcHIpeAPb0iAAAN_QmEo2U852.jpg?w=114&h=114'}}
                                />
                                <View style={styles.nameWrap}>
                                    <Text style={styles.name} numberOfLines={1}>游戏吧</Text>
                                </View>                                
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.app}>
                                <Image 
                                    style={styles.icon}
                                    source={{uri:'http://filelx.gao7.com/g1/M00/CB/02/CilEmlcHIlSAAZsJAAAkc0GeW0Y124.jpg?w=150&h=150'}}
                                />
                                <View style={styles.nameWrap}>
                                    <Text style={styles.name} numberOfLines={1}>龙珠激斗豆豆都</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.app}>
                                <Image 
                                    style={styles.icon}
                                    source={{uri:'http://file.gao7.com/g1/M00/CC/D7/CilEmVcHIi6AbkHJAAA0sE6mcYI795.jpg?w=512&h=512'}}
                                />
                                <View style={styles.nameWrap}>
                                    <Text style={styles.name} numberOfLines={1}>暗影之虫</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.app}>
                                <Image 
                                    style={styles.icon}
                                    source={{uri:'http://filelx.gao7.com/g1/M00/CB/00/CilEmlcHIYaANdo4AAC3Nm810zc132.jpg?w=512&h=512'}}
                                />
                                <View style={styles.nameWrap}>
                                    <Text style={styles.name} numberOfLines={1}>皇室战争</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#eee'
  },
  itemBorder:{
      borderBottomColor:'#ddd',
      borderBottomWidth:pixel,
  },
  /*头部信息*/
  appInfoWrap:{
      height:size200,
      justifyContent:'center',
      backgroundColor:'#fff',
      marginBottom:size20,
  },
  appInfo:{      
      flexDirection:'row',
      height:size(140),
      paddingHorizontal:size20,
  },
  appIcon:{
      width:size(140),
      height:size(140),
      marginRight:size(24),
  },
  appDownload:{
      width:size(96),
      marginLeft:size(24),
  },
  appDownloadIcon:{
      width:size(76),
      height:size(76),
  },
  appDownloadIconWrap:{
      height:size(100),
      borderBottomColor:'#cccccc',
      borderBottomWidth:pixel,
      alignItems:'center',
  },
  appSizeWrap:{
      paddingHorizontal:-size10,
      alignItems:'center',
  },
  appNameWrap:{
      height:size(70),
      marginTop:size10, 
  },
  appName:{
      color:'#000',
      fontSize:size30,
  },
  appTags:{
      height:size(70),
      flexDirection:'row',
      alignItems:'center',
  },
  appTag:{
      height:size(34),
      alignItems:'center',
      justifyContent:'center',     
      padding:size(6),
      borderColor:'#eb4243',
      borderWidth:size(1),
      borderRadius:2,
      marginRight:size10,
  },
  appTagText:{
      color:'#eb4243',
  },
  
  /*中间栏目*/
  contentItemsWrap:{
      backgroundColor:'#fff',
      padding:size20,
      height:size(180),
      flexDirection:'row',
      flex:1,
  },
  contentItemLeft:{
      paddingRight:size20,
      borderRightColor:'#ddd',
      borderRightWidth:pixel,
      marginRight:size20,
  },
  contentTop:{
      flexDirection:'row', 
      height:size30,
      alignItems:'center', 
      marginBottom:size20,    
      marginTop:size10,
  },
  topIcon:{
      width:size30,
      height:size30,
      marginRight:size10,      
  },
  contentNameWrap:{
      height:size30,
      justifyContent:'center',
  },
  contentName:{
      fontSize:size(32),
  },
  contentDesText:{
      color:'#595959',
      fontSize:size(24),
  },
  
  /*内容提要*/
  desContent:{
      paddingHorizontal:size20,
      backgroundColor:'#fff',
      paddingVertical:size40,
  },
  desContentTop:{
      flexDirection:'row',
      height:size(32),
      alignItems:'center',
      marginBottom:size30
  },
  desTitle:{
      fontSize:size(32),
      color:'#000',
      flex:1,
  },    
  desShowLines:{
      flex:1,       
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
  },
  desText:{
      lineHeight:20,
  },
  arrow:{
      width:size20,
      height:size20,
      marginLeft:size(5),
  },
  
  /*图片*/
  showPics:{
      height:size(840),
      paddingVertical:size40,
      backgroundColor:'#fff',
  },  
  showPicsTitleWrap:{
      height:size(32),
      justifyContent:'center',
      marginBottom:size40,
  },
  showPicsTitle:{
      fontSize:size(32),
      color:'#000',
      marginLeft:size20,
  },
  showPic:{
      width:size(390),
      height:size(696),
      marginLeft:size40,
  },
  
  /*开发商信息*/
  devInfo:{
      backgroundColor:'#fff',
      paddingHorizontal:size20,
      paddingVertical:size40,      
  },
  itemTitle:{
      height:size(32),
      justifyContent:'center',
      marginBottom:size30,
  },
  itemTitleText:{
      color:'#000',
      fontSize:size(32),
  },
  devLabelWrap:{
      height:size(26),
      flexDirection:'row',
  },
  devLabel:{
      color:'#aaa',
      paddingRight:size30,
  },
  
  /*相关推荐 */
  itemRec:{
      backgroundColor:'#fff',
      paddingVertical:size40,
  },
  appList:{
      flexDirection:'row',      
  },
  app:{
      width:size(128),  
      marginLeft:size(26), 
  },
  icon:{
      width:size(128),
      height:size(128),
      marginBottom:size(16),
      borderRadius:size30,
  },
  nameWrap:{
      height:size(26),
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:-size10,
  },
  name:{      
      color:'#000',
      fontSize:size(26),
      textAlign:'center',
  },
});
