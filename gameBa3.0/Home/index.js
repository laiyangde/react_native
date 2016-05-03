'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    RefreshControl,
    AsyncStorage,
    TouchableOpacity
} from 'react-native'
import Modules from './module'
import Recommend from './recommend'
import Carousel from './carousel'
import Activity from './activity'
import MultiFunction from '../multiFunction'
import {homeData} from '../util'
import StaticContainer from 'StaticContainer.react'
class HomeContent extends Component {
    render(){
      const {datas,navigator}=this.props;
      return <View>
          <Carousel datas={datas.carousel} navigator={navigator} />
          <Recommend datas={datas.recommend} navigator={navigator} />
          <Activity datas={datas.activity} navigator={navigator} />
          <Modules datas={datas.modules} navigator={navigator} />
      </View>
    }
}

export default class Home extends Component {
  render(){
     /* interface 接口
      * navigator 导航对象
      * renderContent 初始化显示内容
      * renderLoadingMore 加载更多显示组件
      * loadingMoreDataName 加载更多数据在接口里的对象名
      */
   return <MultiFunction interface={homeData} navigator={this.props.navigator} renderContent={HomeContent} renderLoadingMore={Modules} loadingMoreDataName='modules'/>
  }
}
