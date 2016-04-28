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
import Empty from '../empty'
import Activity from './activity'
import {getJSON,homeData,Loading,size88,size20,size24,clientHeight} from '../util'
import StaticContainer from 'StaticContainer.react'
var doubleClientHeight=clientHeight*2
export default class Home extends Component {
   constructor(props) {
        super(props);
        this.state = {
            homeData:null,
            loading:true,
            isRefreshing:false,
            shouldUpdate:true,
            showBackTop:false
        };
    }
    getData=(storageData)=>{
      var _self=this;
        getJSON(homeData,(data)=>{
          data=data.Data;
          if (storageData && storageData===JSON.stringify(data)) {
            return;
          }
          _self._setState(data)
          AsyncStorage.setItem('homeData',JSON.stringify(data))
        })
    }
    _setState=(data)=>{
      this.setState({
          homeData:data,
          loading:false,
          isRefreshing:false,
          shouldUpdate:true
      })
    }
    componentDidMount() {
      var _self=this;
      AsyncStorage.getItem('homeData').then((data)=>{
          if(data===null){
              _self.getData()
          }else{
            _self._setState(JSON.parse(data))
            _self.getData(data)
          }
      }).catch((err)=>{
          _self.getData()
      })      
    }
    backTop=()=>{
      this.scrollView.scrollResponderScrollTo({x:0,y:0,animated:true});
      this.getData(JSON.stringify(this.state.homeData));
    }
    render() {
      var navigator=this.props.navigator
      return (
          <View style={styles.container} >
            {
              this.state.loading ? <Loading /> :
              <View style={styles.container} >
                <ScrollView 
                  ref={(scrollView)=>{
                      this.scrollView=scrollView;
                  }}
                  style={styles.ScrollView} 
                  onScroll={(e)=>{
                      if(e.nativeEvent.contentOffset.y>doubleClientHeight && this.state.showBackTop===false){
                         this.setState({
                            shouldUpdate:false,
                            showBackTop:true
                         })
                      }
                      if(e.nativeEvent.contentOffset.y<=doubleClientHeight && this.state.showBackTop===true){
                         this.setState({
                            shouldUpdate:false,
                            showBackTop:false
                         })
                      }
                  }}
                  scrollEventThrottle={1}
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.isRefreshing}
                      onRefresh={()=>{
                        this.setState({
                        isRefreshing:true,
                        shouldUpdate:false                  
                        });
                      this.getData();
                      }}
                      colors={['#ff0000', '#00ff00', '#0000ff']}
                      progressBackgroundColor="#ffff00"
                    />
                  }
                >  
                  <StaticContainer shouldUpdate={this.state.shouldUpdate}>
                    <View style={styles.topShow}>
                      <Carousel datas={this.state.homeData.carousel} navigator={navigator} />
                      <Recommend datas={this.state.homeData.recommend} navigator={navigator} />
                      <Activity datas={this.state.homeData.activity} navigator={navigator} />
                      <Modules datas={this.state.homeData.modules} navigator={navigator} />
                    </View>
                  </StaticContainer>
                </ScrollView>
                {
                this.state.showBackTop ? <TouchableOpacity activeOpacity={0.8} style={styles.backTop} onPress={this.backTop}>
                    <Image source={require('../images/backTop.png')} style={[styles.img88x88,]} resizeMode='stretch'/>
                </TouchableOpacity> : null
                }
              </View>
            }
          </View>
        );
    };
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  ScrollView:{
    backgroundColor:"#eee",
    flex:1
  },
  topShow:{
    backgroundColor:'#fff'
  },
  backTop:{
    position:'absolute',
    bottom:size20,
    right:size24
  },
  img88x88:{
    width:size88,
    height:size88
  }
});