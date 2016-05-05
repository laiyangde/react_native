import React, {
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Navigator,
} from 'react-native'

import Empty from './empty'
import ViewPager from './viewPager'
import DrawerLayout from './DrawerLayout/'
import Navigation from './navigation'
import {size,ios} from './util'
import Side from './Home/side'

export default class Index extends Component{
    render(){
        return(
            <Navigator                
                initialRoute={{
                    component: IndexRender,
                }}
				renderScene={(route,nav)=>{
                    var Component=route.component
                    return <Component navigator={nav} {...route.passProps}/>
                }}
            />
        )
    }
}

class IndexRender extends Component {
  open=()=>{
    this.drawer.openDrawer()
  }
  render() {
    return (
    <DrawerLayout
      drawerLockMode={'locked-closed'}
      drawerWidth={size(500)}
      drawerPosition={ios?'left':DrawerLayoutAndroid.positions.Left}
      renderNavigationView={()=><Side navigator={this.props.navigator}/>}
      ref={(drawer)=>{
        this.drawer=drawer;
      }}
      >
       <Navigation
          barStyle={{backgroundColor:'#fff'}}
          initialRoute={{
            component: ViewPager,
            title: '搞趣游戏吧',
            passProps: {},
            leftButtonIcon: require('./images/person.png'),
            rightButtonIcon: require('./images/search.png'),
            onLeftButtonPress:this.open,
            onRightBottonPress:()=>{},
            titleStyle:styles.font
          }}
        />
    </DrawerLayout>
    )
  }
}

var styles = StyleSheet.create({
  font:{
    fontSize:size(36),
    color:'#000',
    textAlign:'center',
  }
})
