import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Empty from '../empty'
import Navtab from './navtab'
import TabBar from '../TabBar'
import Hot from './hot'
import New from './new'
import Ol from './ol'
import Little from './little'
class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isReady:false
    };
  } 
  componentDidMount() {
      this.setState({
        isReady:true
      })
  }
  render(){
    return <View style={styles.flex}>
          {
            this.state.isReady && <TabBar locked={true} tabBarPosition='top' renderTabBar={Navtab} >
                  <Hot />
                  <New />
                  <Ol />
                  <Little />
            </TabBar>
          }
          </View>
  }
}

export default class RankBox extends Component {
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return <Rank />
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1,
  }
})

