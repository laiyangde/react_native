import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Text,
  ViewPagerAndroid,
  Dimensions,
  ToastAndroid
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
            currentPage:0,
            drag:0,
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
      return result;

  }
  gotoPage=(num)=>{
      var viewPager  = this.viewPager ;
      viewPager .setPage(num);
  }
  startTimer=()=>{
      var viewPager  = this.viewPager ;
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
              <ViewPagerAndroid
              style={styles.viewpager}
              initialPage={0}
              onPageScrollStateChanged  = {(e)=>{
                  if(e=='dragging'){
                    global.clearInterval(this.timer);
                  }
              }}
              onPageSelected = {(e)=>{                   
                  this.startTimer();
                  this.page = e.nativeEvent.position;
                  this.setState({
                    currentPage:this.page 
                  });
              }}

              ref={viewPager=>{
                  this.viewPager =viewPager ;
              }}
              >
                {this.renderCycleImages()}              
              </ViewPagerAndroid>
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
  viewpager:{
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


