  
import React from 'react'
import AppContainer from './navigation/AppNavigator'

export default function App() {
	return <AppContainer />
}

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from 'react';
// import { WebView } from 'react-native-webview';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import Base64 from './Base64';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {

//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     let token="", domain = "vi2", domainId = "1", queryString = "?domain=" + encodeURIComponent(domain) + "&domainId=" + encodeURIComponent(domainId) + "&token=" + encodeURIComponent(token);
//     let qStr = Base64.btoa(queryString);

//     this.setState({
//       uri: 'https://test.caresoft.vn:18444/getChatViewMobile?key=' + qStr
//     })

//     console.log("qStr" + qStr);
//   }

//   render() {
//     return (
//       <View>
//         <Text>123</Text>
//       </View>
//     //   <WebView
//     //    ref="webview"
//     //    source={{uri:this.state.uri}}
//     //    onNavigationStateChange={this._onNavigationStateChange.bind(this)}
//     //    javaScriptEnabled = {true}
//     //    domStorageEnabled = {true}
//     //    injectedJavaScript = {this.state.cookie}
//     //    startInLoadingState={false}
//     //  />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
