import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import {size10,size15,size20,size24,size30,size50,size120,size200,size,styles as styles0,size190,size210,size600,size110,ios} from '../util';
import WebView from './webview'
export default class Modules extends Component {
  renderModule=()=>{
    var self=this;
    var component=null;
    var last=this.props.datas.length-1
     return this.props.datas.map((data,index)=>{
      const {type,title,singleUrl,content,time,icon,url,link}=data
          switch(type){
            case '1':
            case '3':
            case '4':
            //攻略／礼包／活动
            component = 
              <View key={type} style={[styles.marginBorderBottom,index===last && styles.borderBottomNone]}>
                <TouchableOpacity style={[styles0.pH20,styles0.pV30,styles0.row,styles.modulesBorder,index===0 && styles.borderTopNone,index===last && styles.borderBottomNone]} onPress={self.goto.bind(self,data)} activeOpacity={0.8}>
                  <Image source={{uri:singleUrl}} style={[styles.img200x120,{marginRight:size15}]}/>
                  <View style={styles0.flex}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <Text style={[styles.desc,ios && {lineHeight:size30}]} numberOfLines={2}>{content}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            break;
            case '7':
            //团购宣传
            component = 
              <View key={type} style={[styles.marginBorderBottom,index===last && styles.borderBottomNone]}>
                <TouchableOpacity style={[styles0.pH20,styles0.pV30,styles.modulesBorder,index===0 && styles.borderTopNone,index===last && styles.borderBottomNone]} onPress={self.goto.bind(self,data)} activeOpacity={0.8}>
                  <View style={{borderWidth:1,borderColor:'#ddd'}}>
                    <Image source={{uri:singleUrl}} style={[styles.img600x205,]}/>
                    <View style={[styles0.row,styles0.aCenter,styles0.pH20,styles0.pV20,{justifyContent:'space-between'}]}>
                        <Text style={[styles.font26,styles.fontAaa]}>￥<Text style={[styles.fontRed,styles.font32]}>6.66</Text> <Text style={[{textDecorationLine:'line-through',},styles.font24]}>300</Text></Text>
                        <Text style={[styles.font26,styles.fontAaa]}>已售<Text style={styles.fontRed}>6000</Text>件</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
             break;
            case '5':
            //多图攻略
            component = 
              <View key={type} style={[styles.marginBorderBottom,index===last && styles.borderBottomNone]}>
                <TouchableOpacity style={[styles0.pH20,styles0.pV30,styles.modulesBorder,index===0 && styles.borderTopNone,index===last && styles.borderBottomNone]} onPress={self.goto.bind(self,data)} activeOpacity={0.8}>      
                  <Text style={styles.title} numberOfLines={1}>{title}</Text>  
                  <Text style={[styles.desc,ios && {lineHeight:size30}]} numberOfLines={3}>{content}</Text>
                  <View style={[styles0.row,{justifyContent:'space-between'}]}>
                    <Image style={styles.img190x110} resizeMode='stretch' source={{uri:url[0]}} />
                    <Image style={styles.img190x110} resizeMode='stretch' source={{uri:url[1]}} />
                    <Image style={styles.img190x110} resizeMode='stretch' source={{uri:url[2]}} />
                  </View>
                </TouchableOpacity>
              </View>
             break;

            case '6':
            //专题
            component = 
              <View key={type} style={[styles.marginBorderBottom,index===last && styles.borderBottomNone]}>
                <TouchableOpacity style={[styles0.pH20,styles0.pV30,styles.modulesBorder,index===0 && styles.borderTopNone,index===last && styles.borderBottomNone]} onPress={self.goto.bind(self,data)} activeOpacity={0.8}>      
                  <View style={[styles0.row,styles0.aCenter]}>
                    <Image style={styles.icon} source={{uri:icon}}/>
                    <Text style={[styles.title,styles0.flex]} numberOfLines={1}>{title}</Text>
                    <Text style={styles.time}>{time}</Text>
                  </View>
                  <Image source={{uri:singleUrl}} style={styles.img600x210}/>
                </TouchableOpacity>
              </View>
             break;

            case '2':
            //视频
            component =
              <View key={type} style={[styles.marginBorderBottom,index===last && styles.borderBottomNone]}>
                <TouchableOpacity style={[styles0.pH20,styles0.pV30,styles0.row,styles.modulesBorder,index===0 && styles.borderTopNone,index===last && styles.borderBottomNone]} onPress={self.goto.bind(self,data)} activeOpacity={0.8}>
                  <View style={styles0.flex}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <Text style={[styles.desc,ios && {lineHeight:size30}]} numberOfLines={2}>{content}</Text>
                  </View>
                  <View style={[styles.videoWrap,styles0.center,]}>
                    <Image source={{uri:singleUrl}} style={[styles.img200x120,styles.videoImg]}/>
                    <Image source={require('../images/video.png')} style={[styles.videoIcon]}/>
                  </View>
                </TouchableOpacity>
              </View>
              break;

          }
          return component
     })
  }
  goto(data){
     if(data.type==='3') {
        
     }else if(data.type==='4'){

     }else{
        this.props.navigator.push({
          component: WebView,
          title: data.title,
          passProps: {recommendLink:data.link},
          backButton:true
        })
     }
  }
  render() {
    return (
        <View style={{overflow:'hidden'}}>
        {this.renderModule()}
        </View>
    )
  }
}


var styles = StyleSheet.create({
  img200x120:{
    width:size200,
    height:size120,
  },
  img190x110:{
    width:size190,
    height:size110,
    marginTop:size15
  },
  img600x210:{
    width:size600,
    height:size210,
    marginTop:size20
  },
  img600x205:{
    width:size600-2,
    height:size(205)-2,
  },
  videoIcon:{
    width:size50,
    height:size50,
  },
  videoImg:{
    position:'absolute',
    top:0,
    left:0
  },
  videoWrap:{
    width:size200,
    height:size120,
    marginLeft:size15
  },
  title:{
    fontSize:size30,
    color:'#000',
    fontWeight:'500',
  },
  desc:{
    fontSize:size24,
    color:'#979797',
    marginTop:size10,
  },
  modulesBorder:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderTopColor:'#ddd',
    borderBottomColor:'#ddd'
  },
  marginBorderBottom:{
    borderBottomWidth:size20,
    borderBottomColor:'#eee'
  },
  borderTopNone:{
    borderTopWidth:0
  },
  borderBottomNone:{
    borderBottomWidth:0
  },
  icon:{
    width:size110,
    height:size30,
    marginRight:size15,
  },
  time:{
    color:'#979797',
    fontSize:size24
  },
  font26:{
    fontSize:size(26)
  },
  font32:{
    fontSize:size(32)
  },
  font24:{
    fontSize:size24
  },
  fontRed:{
    color:'#eb4243'
  },
  fontAaa:{
    color:'#aaaaaa'
  }
})