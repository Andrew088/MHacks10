import React from 'react';
import { Button, Image, TouchableOpacity, View } from 'react-native';
import Expo from 'expo';

export default class TextImageGenerator extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Take a picture"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await Expo.ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });


    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}





/*import React, {Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';

export default class MyApp extends Component{
  render(){
    return (
      <View>
      <Text>Hello World</Text>
      </View>
      );
  }
}
AppRegistry.registerComponent('MyApp',()=>MyApp); */

/*import Expo from 'expo';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  CameraRoll,
} from 'react-native';

export default class App extends Component {
  state = {
    imgUri: 'https://imgflip.com/s/meme/Philosoraptor.jpg',
    topText: '',
    bottomText: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ topText: text })}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ bottomText: text })}
        />
        <View ref={(ref) => this.memeView = ref}>
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: this.state.imgUri }}
          />
          <Text style={[styles.text, { top: 5 }]}>
            {this.state.topText}
          </Text>
          <Text style={[styles.text, { bottom: 5 }]}>
            {this.state.bottomText}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onTakePic}>
            <Text style={styles.buttonText}>take a pic!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onSave}>
            <Text style={styles.buttonText}>save!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  AppRegistry.registerComponent('App',()=>App);

  _onTakePic = async () => {
    const {
      cancelled,
      uri,
    } = await Expo.ImagePicker.launchCameraAsync({});
    if (!cancelled) {
      this.setState({ imgUri: uri });
    }
  }

  _onSave = async () => {
    const uri = await Expo.takeSnapshotAsync(this.memeView, {});
    await CameraRoll.saveToCameraRoll(uri);
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    alignSelf: 'stretch',
  },
  text: {
    position: 'absolute',
    left: 5, right: 5,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttonText: {
    fontSize: 21,
  },
  button: {
    padding: 5,
    margin: 5,
    backgroundColor: '#ddd',
  },
  container: {
    marginTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
*/

/*import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.bucket}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-prod.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync([
        // This is the font that we are using for our tab bar
        Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  bucket: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
*/

