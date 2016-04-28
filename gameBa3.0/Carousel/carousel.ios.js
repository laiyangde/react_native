import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions
} from 'react-native'
var clientWidth=Dimensions.get('window').width;
export default class Carousel extends Component {
  static defaultProps={
      autoPlay:2500,
      isLoop:true,
      bullColor:'#aaa',
      bullColorAct:'#ffffff',
      dataSource:null,
      navStyle:{},
      style:{width:clientWidth,height:clientWidth*11/32}
  }
  constructor(props) {
        super(props);
        this.page=0
        this.state = {
            currentPage:0
        };
  }
  componentDidMount() {
    if(this.props.autoPlay){
        this.startTimer()
    }
  }
  componentWillUnmount(){
    global.clearInterval(this.timer)
  }
  renderCycleImages=()=>{
        var {bullColor,bullColorAct,dataSource,renderPage}=this.props;
        var indicator=[]
        var  result=dataSource.map((item,index)=>{
              indicator.push(<Text key = {index} onPress={()=>{this.gotoPage(index)}} style = {[styles.pageCircleStyle,{color:this.page!==index?bullColor : bullColorAct}]}>&bull;</Text>)
              return renderPage(item,index);
          })
        this.indicator=indicator;
      return result
  }
  gotoPage=(num)=>{
      var scrollView = this.scrollView;
      scrollView.scrollResponderScrollTo({x:num * this.props.style.width,y:0,animated:true});
  }
  startTimer=()=>{
      var scrollView = this.scrollView;
      var {dataSource,autoPlay}=this.props;
      var imagesCount = dataSource.length;
      var _self=this;
      var activePage;
       this.timer = global.setInterval(function () {
       activePage=(_self.page + 1)%imagesCount
       _self.gotoPage(activePage)
       _self.page=activePage;
        _self.setState({
         currentPage:activePage
        });
      },autoPlay)
  }
  render() {
      var {style:{width,height},navStyle,dataSource,style}=this.props;
    return (
          <View style={[style]}>
              <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(e)=>{
                 this.page=Math.floor(e.nativeEvent.contentOffset.x/width);
                 if (this.page!==this.state.currentPage) {
                    this.setState({
                      currentPage:this.page
                    })
                 }
              }}
              onScrollBeginDrag={()=>{
                  global.clearInterval(this.timer);
              }}
              onScrollEndDrag={()=>{
                  this.startTimer();
              }}
              ref={(scrollView)=>{
                  this.scrollView=scrollView;
              }}
              directionalLockEnabled={false}
              scrollsToTop={false}
              >
                {this.renderCycleImages()}
              </ScrollView>
              <View style = {[styles.pageView,{width:width},navStyle,]}>
                  <View style={[styles.pageViewStyle,styles.flex]}>
                    {this.indicator}
                  </View>
               </View>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  flex:{
    flex:1
  },
  pageViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  pageView:{
        height:30,
        position:'absolute',
        bottom:0,
    },
    pageCircleStyle:{
       fontSize:30,
       marginLeft:5,
       backgroundColor:'transparent'
    },
});


