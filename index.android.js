/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CodePush from "react-native-code-push";
import Index from './gameBa3.0/';

class GameBar extends Component {

  componentDidMount() {

    CodePush.sync(
        {updateDialog:true, installMode:CodePush.InstallMode.IMMEDIATE}
    );
  }

  render() {
    return (
      <Index />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GameBar', () => GameBar);
