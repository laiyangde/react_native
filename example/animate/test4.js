
var React = require('react-native');
var {
  Animated,
  InteractionManager,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TextInput:{
    State: TextInputState,
  },
  Component
} = React;

export default class Test1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            openValue: new Animated.Value(0), // 初始值
            drawerShown:false
        };
    }
    componentWillMount(){
        if (this.props.keyboardDismissMode === 'on-drag') {
       TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
      }
    }
    openDrawer=()=>{
        Animated.timing(this.state.openValue, {
            toValue: 1, // 目标值
            duration: 2000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
    }
    closeDrawer=()=>{
        Animated.timing(this.state.openValue, {
            toValue: 0, // 目标值
            duration: 2000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
    }
    render() {
        return (
              <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                
                <Animated.View style={styles.main}>
                  {this.props.children}
                </Animated.View>

                {drawerShown &&
                  <TouchableWithoutFeedback onPress={this._onOverlayClick}>
                    <Animated.View
                      style={[styles.overlay, animatedOverlayStyles]} />
                  </TouchableWithoutFeedback>
                }
                <Animated.View style={[styles.drawer, dynamicDrawerStyles, animatedDrawerStyles]}>
                  {this.props.renderNavigationView()}
                </Animated.View>
              </View>
        );
    }   
}
 
const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  main: {
    flex: 1,
  },
  overlay: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});