'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import WebView from './webview'
import {clientWidth,size30} from '../util'
import Carousel from '../Carousel/carousel';
export default class M_carousel extends Component {
   constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
      return (
        <Carousel
          dataSource={this.props.datas}
          renderPage={this._renderPage}
          navStyle={{paddingRight:size30}}
          />
      )
  }

   _renderPage = (data,index) => {
        return (
        <View key={index}>
          <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={()=>{
            this.props.navigator.push({
                  component: WebView,
                  title: data.recommendTitle,
                  passProps: {recommendLink:data.recommendLink},
                  backButton:true
            })
          }} >
          <Image
            source={{uri: data.recommendUrl}}
            style={styles.image} />
          </TouchableOpacity>
        </View>
        );

    };
}

var styles = StyleSheet.create({
  container: {
  },
  image:{
    width:clientWidth,
    height:clientWidth*11/32
  }
});