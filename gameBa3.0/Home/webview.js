import React, {
  Component,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native'

import {Loading} from '../util'

export default class Webview extends Component {
  render() {
    return (
        <View style={styles.container}>
          <WebView
              source={{uri: this.props.recommendLink}}
              startInLoadingState={true}
              javaScriptEnabled={true}
              injectedJavaScript=''
              renderLoading={()=>{
                return <Loading />
              }}
            />
        </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  }
})



