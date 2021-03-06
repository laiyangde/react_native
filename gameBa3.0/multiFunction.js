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
import {getJSON,homeData,Loading,size88,size20,size24,clientHeight,styles as styles0} from './util'
import StaticContainer from 'StaticContainer.react'
export default class Home extends Component {
    static defaultProps={
        threshold:clientHeight*2,
        interface:null,
    }
    constructor(props) {
        super(props);
        this.loadingContent=[];
        this.pageIndex=0;
        this.state = {
            datas:null,
            loading:true,
            isRefreshing:false,
            shouldUpdate:true,
            showBackTop:false,
            loadingMore:false,
            loadingTip:'加载中...'
        };
    }
    getData=(storageData)=>{
      var _self=this;
        getJSON(this.props.interface+'&pageIndex=0',(data)=>{
          data=data.Data;
          _self.loadingContent=[]; 
          _self.pageIndex=0;
          if (storageData && storageData===JSON.stringify(data)) {
            _self.setState({
                shouldUpdate:false,
                loadingTip:'加载中...',
                loadingMore:false
            })
            return;
          }
          this.total=data.pageTotal;
          _self._setState(data)
          AsyncStorage.setItem(this.props.interface,JSON.stringify(data))
        })
    }
    loadingMore=()=>{
      var _self=this;
      var next=this.pageIndex+1
      if(next>=this.total){
        if(this.state.loadingTip==='加载中...'){
          _self.setState({
              shouldUpdate:false,
              loadingTip:'已经没有更多了'
          })
        }
         return false
      }
      getJSON(this.props.interface+'&pageIndex='+next,(data)=>{
          data=data.Data;
          if(data[_self.props.loadingMoreDataName].length===0){
            _self.setState({
                shouldUpdate:false,
                loadingTip:'已经没有更多了'
            })
            _self.total=data.pageTotal;
            return false            
          }
          _self.loadingContent.push(<_self.props.renderLoadingMore datas={data[_self.props.loadingMoreDataName]} navigator={this.props.navigator} key={_self.pageIndex=next}/>)
          _self.setState({
            shouldUpdate:false,
            loadingMore:false
          })
      })
    }
    _setState=(data)=>{
      this.setState({
          datas:data,
          loading:false,
          isRefreshing:false,
          shouldUpdate:true,
          loadingTip:'加载中...',
          loadingMore:false
      })
    }
    componentDidMount() {
      var _self=this;
      AsyncStorage.getItem(this.props.interface).then((data)=>{
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
      this.getData(JSON.stringify(this.state.datas));
    }
    render() {
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
                      if(e.nativeEvent.contentOffset.y>this.props.threshold && this.state.showBackTop===false){
                         this.setState({
                            shouldUpdate:false,
                            showBackTop:true
                         })
                      }
                      if(e.nativeEvent.contentOffset.y<=this.props.threshold && this.state.showBackTop===true){
                         this.setState({
                            shouldUpdate:false,
                            showBackTop:false
                         })
                      }
                      if(this.state.loadingMore===false && e.nativeEvent.contentOffset.y>e.nativeEvent.contentSize.height-e.nativeEvent.layoutMeasurement.height){
                          this.setState({
                            shouldUpdate:false,
                            loadingMore:true,
                          })
                          this.loadingMore()
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
                    <View>
                        <this.props.renderContent datas={this.state.datas} navigator={this.props.navigator} />
                    </View>
                  </StaticContainer>
                  {this.loadingContent}
                  {this.state.loadingMore && <View style={[styles0.center,{marginBottom:size24}]}><Text>{this.state.loadingTip}</Text></View>}
                </ScrollView>
                {
                this.state.showBackTop ? <TouchableOpacity activeOpacity={0.8} style={styles.backTop} onPress={this.backTop}>
                    <Image source={require('./images/backTop.png')} style={[styles.img88x88,]} resizeMode='stretch'/>
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
    backgroundColor:"#fff",
    flex:1
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