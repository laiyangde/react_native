import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'



export default class Empty extends Component {
  render() {
    return (
        <View style={styles.container}><Text>没东西</Text></View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor:'red'
  }
})
