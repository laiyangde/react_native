import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  PixelRatio
} from 'react-native'
import {barIcon,barIconActive,clientWidth,styles as styles0,size,size10,size45,size120,size93,size20,tabBarData,size40} from '../util'
export default class TabBarButton extends Component {
  _button=()=>{
    return ['首页','礼包','商城','活动','榜单'].map((text,index)=>{
      return(
      <TouchableOpacity style={[styles0.flex,styles.button,styles['button'+index]]} onPress={()=>{this.props.goToPage(index)}} key={index}>
            <Image
              style={[styles.icon]}
              source={this.props.currentPage==index ? barIconActive[index] : barIcon[index]} 
              resizeMode='stretch'
              />
              <View style={[{height:size40},styles0.center]}>
                  <Text style={[styles.font,this.props.currentPage==index ? styles.textActive :null ]}>{text}</Text>
              </View>
      </TouchableOpacity>
      )
    })
  }
  render() {
    var button=this._button();
    return (
    <View style={[styles.container,styles0.row]} pointerEvents='box-none' >
          <View style={[styles.circle,styles.circle1]}></View>
          <View style={[styles.bar]}></View>
          <View style={[styles.circle,styles.circle2]}></View>
          <View style={[styles.circle3]}></View>
          {button}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:size120,
    backgroundColor:'transparent',
    alignItems:'flex-end'
  },

  text:{
    color: '#000'
  },
  textActive:{
    color:'#F35F5F'
  },
  bar:{
    position:'absolute',
    bottom:0,
    width:clientWidth,
    height:size(98),
    backgroundColor:'#f8f8f8',
    borderTopWidth:1,
    borderColor:'#ccc'
  },
  circle:{
    position:'absolute',
    top:0,
    left:clientWidth/2-clientWidth/10,
    width:clientWidth/5,
    height:clientWidth/5,
    borderRadius:clientWidth/5
  },
  circle1:{
    borderWidth:1,
    borderColor:'#ccc',
    backgroundColor:'#f8f8f8'
  },
  circle2:{
    backgroundColor:'#f8f8f8',
    top:2
  },
  circle3:{
    position:'absolute',
    top:size(16),
    width:size93,
    height:size93,
    backgroundColor:'#eb4243',
    left:clientWidth/2-size93/2,
    borderRadius:size93
  },
  icon:{
    width:size45,
    height:size45
  },
  button:{
    alignItems:'center',
  },
  button2:{
    marginBottom:size10
  },
  font:{    
    fontSize:size20,
  }
});


