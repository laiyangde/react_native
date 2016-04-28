'use strict';

// 参考：https://github.com/bingoogolapple/react-native-bga-badge-view
import React, { 
	Component,
	View,
	requireNativeComponent,
	PropTypes,
	StyleSheet,
} from 'react-native';

// 先实现ReactView
class GiftLayoutAndroid extends Component {
  constructor(props) {
    super(props);
  }

  // _onSearchClick() {
  //   if (this.props.onSearchClick) {
  //     this.props.onSearchClick();
  //   }
  // }onSearchClick={this._onSearchClick.bind(this)}
  render() {
    return <RctGiftLayout {...this.props} style={styles.container}  />;
  }
}

// 定义ReactView默认属性
GiftLayoutAndroid.propTypes = {
  ...View.propTypes,
  onSearchClick: PropTypes.func,
};

// 导入原生view
var RctGiftLayout = requireNativeComponent('RctGiftLayout', GiftLayoutAndroid);

// 定义ReactView默认样式，需要设置flex强制撑开否则不显示
// http://www.azzfun.net/2015/11/23/React-Native-UI%E7%BB%84%E4%BB%B6-1/
var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

// 导出ReactView
export { GiftLayoutAndroid as default };