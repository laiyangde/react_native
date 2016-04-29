import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions,
    InteractionManager,
    ScrollView
} from 'react-native'
import  {size,clientWidth,} from "../util"
import StaticContainer from 'StaticContainer.react'
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
  goToPage=(pageNumber)=>{
  	const offset = pageNumber * this.state.containerWidth;
  	this.scrollView.scrollTo({x: offset, y: 0,animated:false});
    this.setState({currentPage: pageNumber, });
  }
  renderScrollableContent=()=>{
  	return (
        <ScrollView
          bounces={false}
          horizontal
          pagingEnabled
          automaticallyAdjustContentInsets={false}
          style={[styles.scrollableContent,this.props.style]}
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
            return <StaticContainer shouldUpdate={this.state.currentPage===idx} key={idx}>
            <View
              style={{width: this.state.containerWidth,}}
              >
              {this.state.currentPage===idx? child : null}
            </View>
            </StaticContainer>
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
    return (
    <View style={[styles.flex]} onLayout={this._handleLayout}>
		{this.props.tabBarPosition==='top' && <this.props.renderTabBar goToPage={this.goToPage} currentPage={this.state.currentPage}/>} 
		{this.renderScrollableContent()}
		{this.props.tabBarPosition==='bottom' && <this.props.renderTabBar goToPage={this.goToPage} currentPage={this.state.currentPage}/>} 
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
  scrollableContent: {
    flexDirection: 'column',
    marginBottom:-size(22)
  },
});