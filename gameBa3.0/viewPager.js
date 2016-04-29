import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Empty from './empty'
import Home from './Home'
import TabBar from './TabBar/'
import TabBarButton from './TabBar/tabBarButton'
import GiftLayoutAndroid from './Component/GiftLayoutAndroid'
import ActivityLayoutAndroid from './Component/ActivityLayoutAndroid'
import Rank from './Rank'

export default class ViewPager extends Component {
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return (
          <TabBar locked={true} renderTabBar={TabBarButton}>
                <Home navigator={this.props.navigator}/>
                <GiftLayoutAndroid navigator={this.props.navigator}/>
                <Empty navigator={this.props.navigator}/>
                <ActivityLayoutAndroid navigator={this.props.navigator}/>
                <Rank navigator={this.props.navigator}/>
          </TabBar>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor:'red'
  }
})

