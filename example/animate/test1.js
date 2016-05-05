
var React = require('react-native');
var {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text,
    Component
} = React;
export default class Test1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fadeInOpacity: new Animated.Value(0) // 初始值
        };
    }
    componentDidMount() {
        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1, // 目标值
            duration: 4000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
    }
    render() {
        return (
            <Animated.View style={[styles.demo, {
                    opacity: this.state.fadeInOpacity
                }]}>
                <Text style={styles.text}>悄悄的，我出现了</Text>
            </Animated.View>
        );
    }   
}
 
var styles = StyleSheet.create({
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30
    }
});