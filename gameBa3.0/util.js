
/**
 * Created by laiyangde on 2016/3/25.
 */
import React,{Component,StyleSheet,View,Image,Text,TouchableOpacity,Dimensions,PixelRatio,Platform} from 'react-native';
//图标
export const barIcon=[
    require('./images/home.png'),    //首页图标
    require('./images/package.png'),    //礼包图标
    require('./images/shop.png'),    //精华图标
    require('./images/act.png'),    //活动图标
    require('./images/rank.png'),    //排行榜图标
]
export const barIconActive=[
    require('./images/home_red.png'),    //首页点击图标
    require('./images/package_red.png'),    //礼包点击图标
    require('./images/shop_red.png'),    //精华点击图标
    require('./images/act_red.png'),    //活动点击图标
    require('./images/rank_red.png'),    //排行榜点击图标
]
export const [clientWidth,clientHeight,pixel]=[
    Dimensions.get('window').width,//屏幕宽度
    Dimensions.get('window').height, //屏幕高度
    1/PixelRatio.get(),  //最小线宽
]

export const size=(num)=>{    
    return clientWidth*num/640
}

export const ios = Platform.OS === 'ios';

export const [size10,size12,size15,size20,size24,size30,size36,size40,size45,size50,size80,size88,size93,size100,size110,size115,size120,size150,size190,size200,size210,size320,size600]=[size(10),size(12),size(15),size(20),size(24),size(30),size(36),size(40),size(45),size(50),size(80),size(88),size(93),size(100),size(110),size(115),size(120),size(150),size(190),size(200),size(210),size(320),size(600)]
export const [homeData]=
[
    'http://test.card.gao7.com/yxb/YxbIndex?Ver=3&PlatForm=1',

]

export const getJSON = function(url, callback) {
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      });
}

export const getJSON2 = function(url, callback) {
    var fetchOptions = {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'User-Agent1':''
      },
    };

    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      });
}

export const postJSON = function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      });
}


//箭头-向左
export class ArrowLeft extends React.Component {
    render(){
        return (
            <View style={[styles.arrow,styles.aLeft]}></View>
        );
    }
}
//箭头-向右
export class ArrowRight extends React.Component {
    render(){
        return (
            <View style={[styles.arrow,styles.aRight]}></View>
        );
    }
}
//箭头-向下
export class ArrowDown extends React.Component {
    render(){
        return (
            <View style={[styles.arrow,styles.aDown]}></View>
        );
    }
}
//箭头-向上
export class ArrowUp extends React.Component {
    render(){
        return (
            <View style={[styles.arrow,styles.aUp]}></View>
        );
    }
}
//加载loading
export class Loading extends React.Component {
    render(){
        return (
            <View style={[styles.flex,styles.center]}>
                  <Image
                    source={require('./images/loading.gif')}
                  />
            </View>
        );
    }
}
export class Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
       var {title,leftButtonTitle,onLeftButtonPress,leftButtonIcon,rightButtonTitle,onRightButtonPress,rightButtonIcon,titleTextColor,backButtonIcon,backButtonTitle,backButtonTitle,navigator,backButton}=this.props

        return(
            <View style={[styles.header,styles.center]}>
                {
                    leftButtonIcon || leftButtonTitle && !backButton?
                    <TouchableOpacity style={[styles.h_left,styles.row,styles.center]} onPress={onLeftButtonPress} >
                    { leftButtonIcon?
                        <Image
                            style={styles.imgLeft}
                            source={leftButtonIcon}
                          />
                          :null
                    }
                    {
                      leftButtonTitle ? 
                        <Text >{leftButtonTitle}</Text>
                        :null
                    }

                    </TouchableOpacity>
                    :null
                }
                {
                    rightButtonIcon || rightButtonTitle?
                    <TouchableOpacity style={[styles.h_right,styles.row,styles.center]} onPress={onRightButtonPress} >
                    {
                      rightButtonTitle ? 
                        <Text >{rightButtonTitle}</Text>
                        :null
                    }
                    { rightButtonIcon ? <Image
                            style={styles.imgRight}
                            source={rightButtonIcon}
                          />
                          :null
                    }
                    </TouchableOpacity>
                    :null
                }

                {
                    backButtonIcon || backButtonTitle && !backButton?
                    <TouchableOpacity style={[styles.h_left,styles.row,styles.center]} onPress={()=>{navigator.pop()}} >
                    {
                      backButtonTitle ? 
                        <Text >{backButtonTitle}</Text>
                        :null
                    }
                    { backButtonIcon ? <Image
                            style={styles.imgRight}
                            source={backButtonIcon}
                          />
                          :null
                    }
                    </TouchableOpacity>
                    :null
                }
                {
                  backButton ? 
                  <TouchableOpacity style={[styles.h_left,styles.row,styles.center]} onPress={()=>{navigator.pop()}}>
                  <ArrowLeft /> 
                  </TouchableOpacity>
                  :null

                }

                <Text style={[{color:titleTextColor}]}>{title ? title : null}</Text>
            </View>
        )
    }
}
//静态组件，控制子元素是否更新
export class StaticContainerextends extends Component{
    render(){
        return this.props.children; 
    }
    shouldComponentUpdate(props){
        return props.shouldUpdate; // 父元素控制是否更新
    }
}
//公共样式
export const styles=StyleSheet.create({
    row:{flexDirection:'row'},
    flex:{flex:1},
    center:{alignItems:'center',justifyContent:'center'},
    aCenter:{alignItems:'center'},
    jCenter:{justifyContent:'center'},
    textCenter:{textAlign:'center',textAlignVertical:'center'},
    h80:{height:size80},
    pH20:{paddingHorizontal:size20},
    pV20:{paddingVertical:size20},
    mH20:{marginHorizontal:size20},
    mV20:{marginVertical:size20},
    pH30:{paddingHorizontal:size30},
    pV30:{paddingVertical:size30},
    mH30:{marginHorizontal:size30},
    mV30:{marginVertical:size30},
    //弹出层背景
    alert:{backgroundColor:'rgba(0,0,0,.5)',position:'absolute',top:0,left:0},
    //Header
    header:{height:size(69),backgroundColor:'#ddd',paddingTop:25},
    imgLeft:{width:size40,height:size40,marginRight:size20},
    imgRight:{width:size40,height:size40,marginLeft:size20},
    h_left:{position:'absolute',bottom:size(9),left:size20},
    h_right:{position:'absolute',bottom:size(9),right:size20},
    //箭头
    arrow:{borderLeftWidth:pixel*3,borderBottomWidth:pixel*3,width:size30,height:size30,borderColor:'#333',},
    //箭头-左
    aLeft:{transform:[{rotate:'45deg'}]},
    //箭头-右
    aRight:{transform:[{rotate:'-135deg'}]},
    //箭头-下
    aDown:{transform:[{rotate:'-45deg'}]},
    //箭头-上
    aUp:{transform:[{rotate:'135deg'}]},
});