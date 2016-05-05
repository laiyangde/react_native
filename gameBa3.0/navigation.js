

/**
 * Created by laiyangde on 2016/3/25.
 用法和navigatorIOS差不多
 差异：
 barTintColor （string）改 barStyle （object）  样式
 改titleTextColor为titleStyle

 增加默认返回图标按钮  设置backButton为true
 无itemWrapperStyle shadowHidden navigationBarHidden tintColor translucent
 
 方法和navigator相同
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Image,
  Platform,
  PixelRatio,
} from 'react-native'
import {ios,styles as styles0,ArrowLeft,size80,size20,size,size115,size40,size45} from './util'
var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
      var {leftButtonTitle,onLeftButtonPress,leftButtonIcon,backButtonIcon,backButtonTitle,backButton}=route;

      return (    <View>
                    
                    {
                    (leftButtonIcon || leftButtonTitle) && !backButton?
                    <TouchableOpacity style={[styles0.row,styles0.center,{height:size80,width:size115,paddingRight:size20}]} onPress={onLeftButtonPress} >
                    { leftButtonIcon?
                        <Image
                            style={styles0.imgLeft}
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
                    (backButtonIcon || backButtonTitle) && !backButton?
                    <TouchableOpacity style={[styles0.row,styles0.center,{height:size80,width:size115,paddingRight:size20}]} onPress={()=>{navigator.pop()}} >
                    {
                      backButtonTitle ? 
                        <Text >{backButtonTitle}</Text>
                        :null
                    }
                    { backButtonIcon ? <Image
                            style={styles0.imgRight}
                            source={backButtonIcon}
                          />
                          :null
                    }
                    </TouchableOpacity>
                    :null
                    }
                  {
                    backButton ? 
                    <TouchableOpacity style={[styles0.row,styles0.center,{height:size80,width:size115,paddingRight:size20}]} onPress={()=>{navigator.pop()}}>
                    <Image
                            style={styles0.imgLeft}
                            source={require('./images/back.png')}
                          />
                    {
                        backButtonTitle ? 
                          <Text style={{marginLeft:size20}}>{backButtonTitle}</Text>
                          :null
                    }
                    </TouchableOpacity>
                    :null

                  }
              
                </View>
        )
  },

  RightButton: function(route, navigator, index, navState) {
      var {rightButtonTitle,onRightButtonPress,rightButtonIcon}=route
      return   (           
                    rightButtonIcon || rightButtonTitle?
                    <TouchableOpacity style={[styles0.row,styles0.center,{height:size80,width:size115,paddingLeft:size20}]} onPress={onRightButtonPress} >
                    {
                      rightButtonTitle ? 
                        <Text >{rightButtonTitle}</Text>
                        :null
                    }
                    { rightButtonIcon ? <Image
                            style={styles0.imgRight}
                            source={rightButtonIcon}
                          />
                          :null
                    }
                    </TouchableOpacity>
                    :null
                )

  },

  Title: function(route, navigator, index, navState) {
      var {title,titleStyle}=route
       return  (
        <View style={[styles0.center,styles0.h80,ios ?null :{alignSelf:'center',flex:1,marginLeft:-72,marginTop:PixelRatio.getPixelSizeForLayoutSize(2)},{paddingHorizontal:size45}]}>
            <Text numberOfLines={1} style={titleStyle}>{title ? title : null}</Text>
        </View>
        )
      
  },
};

export default class Navigation extends Component {
  render() {
    return (
        <View style={styles0.flex}>
          <Navigator
            style={[{paddingTop:size80+(ios?20:0)}]}
            ref={(navigator) => {
              this._navigator = navigator;
            }}
            initialRoute={{...this.props.initialRoute}}
            renderScene={(route,nav)=>{
                var Component=route.component
                return <Component navigator={nav} {...route.passProps}/>
            }}
            configureScene={() => {
              return Navigator.SceneConfigs.FadeAndroid
            }}
            navigationBar={
                <Navigator.NavigationBar
                  routeMapper={NavigationBarRouteMapper}
                  style={[this.props.barStyle,styles0.center,ios?null:{height:size80}]}
                />
            }
          />
        </View>
    )
  }
}




