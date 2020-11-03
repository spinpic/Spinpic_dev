import React, { Component } from 'react'
import { StyleSheet, View, Alert, StatusBar, PermissionsAndroid, Platform, Image, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
/*import CameraRoll from "@react-native-community/cameraroll";

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

async function savePicture() {
  if (Platform.OS === "android" && !(await hasAndroidPermission())) {
    return;
  }
  CameraRoll.save(tag, { type, album })
};

*/
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#646ECB" barStyle="light-content" />
        <View style={styles.top}>

        </View>
        <RNCamera
          style={{ flex: 4, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref
          }}
        />
        <View style={styles.bot}>
          <View style={styles.blank}/>
          <View style={styles.blank}>
            <Image
              style={{height:'100%',width:'100%',resizeMode:'contain'}}
              source={require('./source_pic/photo_icon.png')}/>
          </View> 
          <View style={styles.blank}/>
          <View style={styles.blank}>
            <Image
              style={{height:'100%',width:'100%',resizeMode:'contain'}}
              source={require('./source_pic/capture_icon.png')}/>
          </View>
          <View style={styles.blank}/>
          <View style={styles.blank}>
            <TouchableOpacity>
              <Image
                style={{height:'100%',width:'100%',resizeMode:'contain'}}
                source={require('./source_pic/setting_icon.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.blank}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#646ECB',
  },
  bot: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#646ECB',
  },
  blank:{
    flex:1,
    backgroundColor:'transparent',
  }
})

export default App