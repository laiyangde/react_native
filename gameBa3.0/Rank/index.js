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

export default class Rank extends Component {
  
  render() {
    return (
          <TabBar locked={true} tabBarPosition='top' renderTabBar={Navtab} >
                <Hot />
                <New />
                <Ol />
                <Little />
          </TabBar>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
  }
})

