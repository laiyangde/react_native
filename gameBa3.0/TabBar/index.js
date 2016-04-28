import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions,
    InteractionManager,
    ScrollView
} from 'react-native'
import  {size} from "../util";
var clientWidth=Dimensions.get('window').width
export default class TabBar extends Component {
  static defaultProps = {
      tabBarPosition: 'bottom',
      initialPage: 0,
  };
  constructor(props) {
      super(props);
      this.state = {
	      currentPage: props.initialPage,
	      containerWidth: clientWidth,
      };
  }
  componentWillReceiveProps(props) {
    if (props.page >= 0 && props.page !== this.state.currentPage) {
      this.goToPage(props.page);
    }
  }
  goToPage=(pageNumber)=>{
  	const offset = pageNumber * this.state.containerWidth;
  	this.scrollView.scrollTo({x: offset, y: 0,animated:false});
    this.setState({currentPage: pageNumber, });
  }
  renderTabBar=(props)=>{
    if (this.props.renderTabBar) {
      return React.cloneElement(this.props.renderTabBar(), props);
    } else {
      return null
    }
  }
  renderScrollableContent=()=>{
  	return (
        <ScrollView
          bounces={false}
          horizontal
          pagingEnabled
          automaticallyAdjustContentInsets={false}
          style={styles.scrollableContentIOS}
          contentContainerStyle={styles.flex}
          contentOffset={{ x: this.props.initialPage * this.state.containerWidth, }}
          ref={(scrollView) => { this.scrollView = scrollView; }}
          scrollsToTop={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={!this.props.locked}
          directionalLockEnabled
          alwaysBounceVertical={false}
          keyboardDismissMode="on-drag"
          >
          {this.props.children.map((child, idx) => {
            return <View
              key={idx}
              style={{width: this.state.containerWidth,}}>
              {child}
            </View>;
          })}
        </ScrollView>
      );
  }
  _handleLayout=(e)=>{
    const { width, } = e.nativeEvent.layout;
    if (width !== this.state.containerWidth) {
      this.setState({ containerWidth: width, });
      InteractionManager.runAfterInteractions(() => {
        this.goToPage(this.state.currentPage);
      });
    }
  }
  render() {
  	var _props={
  		goToPage:this.goToPage,
  		currentPage:this.state.currentPage
  	}
    return (
    <View style={[styles.flex]} onLayout={this._handleLayout}>
		{this.props.tabBarPosition==='top' && this.renderTabBar(_props)} 
		{this.renderScrollableContent()}
		{this.props.tabBarPosition==='bottom' && this.renderTabBar(_props)} 
    </View>
    )
  }
}

const styles = StyleSheet.create({
  flex:{
	flex:1
  },
  scrollableContentContainerIOS: {
    flex: 1,
  },
  scrollableContentIOS: {
    flexDirection: 'column',
    marginBottom:-size(22)
  },
});