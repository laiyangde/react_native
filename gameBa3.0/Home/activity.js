import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native'
import {size,styles as styles0,size320,size150,clientWidth,size30,size20} from "../util";


export default class Act extends Component {
  _next(){
    // this.props.navigator.push({
    //   component: WebView,
    //   title: data.recommendTitle,
    //   passProps: {recommendLink:data.recommendLink},
    //   backButton:true
    // })
  }
  render() {
    const [data1,data2,data3,data4,data5]=this.props.datas;
    return (
        <View style={styles.activityBorder}>
            <TouchableHighlight style={[styles.borderBottom]} onPress={this._next.bind(this,data1)}>
                  <Image
                    style={styles.imgTop}
                    source={{uri: data1.recommendUrl}} resizeMode='stretch'/>
            </TouchableHighlight>
            <View style={styles0.row}>
                <TouchableHighlight style={[styles.borderRight,styles.borderBottom]} onPress={this._next.bind(this,data2)}>
                  <Image
                    style={styles.imgLeft}
                    source={{uri: data2.recommendUrl}} resizeMode='stretch'/>
                </TouchableHighlight>
                <View>
                  <TouchableHighlight style={styles.borderBottom} onPress={this._next.bind(this,data3)}>
                    <Image
                      style={styles.imgRightTop}
                      source={{uri: data3.recommendUrl}} resizeMode='stretch'/>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.borderBottom} onPress={this._next.bind(this,data4)}>
                    <Image
                      style={styles.imgRightBottom}
                      source={{uri: data4.recommendUrl}} resizeMode='stretch'/>
                  </TouchableHighlight>
                </View>
            </View>
        </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor:'red'
  },
  imgTop:{
    width:clientWidth,
    height:size150
  },
  imgLeft:{
    width:size320,
    height:size(300)
  },
  imgRightTop:{
    width:size320,
    height:size150
  },
  imgRightBottom:{
    width:size320,
    height:size150-1
  },
  borderBottom:{
    borderBottomWidth:1,
    borderColor:'#ddd'
  },
  borderRight:{
    borderRightWidth:1,
    borderColor:'#ddd'
  },
  activityBorder:{
    borderBottomWidth:size30,
    borderTopWidth:size20,
    borderBottomColor:'#eee',
    borderTopColor:'#eee'
  }
})
