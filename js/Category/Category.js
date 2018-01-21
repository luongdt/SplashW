/**
* @Author: luongtd
* @Date:   2016-07-21T00:49:24-07:00
* @Last modified by:   luongtd
* @Last modified time: 2016-08-17T00:50:03-07:00
*/



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
var Carousel = require('react-native-carousel');


class Category extends Component {
  onClickItem(url){
    console.log("===========5=====" + url);
  }
   onClickCarousel(){
    console.log("===========6=====" );
  }
  render() {
    var url  = this.props.list[1];
    console.log("===99999====" + String(url));
    return (
      <View style={{ flex: 1 }}>
      <View style={styles.bgImageWrapper}>
  
  </View>
      <Carousel width={375} animate={false} indicatorAtBottom={true} hideIndicators={true} keyboardShouldPersistTaps={true}
        onPress={this.onClickCarousel} >
        <TouchableOpacity >
         <View style={styles.container}>
           <Image style={styles.thumbnail}
              source={{uri: this.props.list[0]}}
           />
         </View>
        </TouchableOpacity>
        <TouchableOpacity>
         <View style={styles.container}>
           <Image
             style={styles.thumbnail}
             source={{uri: this.props.list[1]}}
           />
         </View>
          </TouchableOpacity>
         <View style={styles.container}>
           <Image
             style={styles.thumbnail}
             source={{uri: this.props.list[2]}}
           />
         </View>
         <View style={styles.container}>
           <Image
             style={styles.thumbnail}
             source={{uri: this.props.list[3]}}
           />
         </View>
         <View style={styles.container}>
           <Image
             style={styles.thumbnail}
             source={{uri: this.props.list[4]}}
           />
         </View>
         <View style={styles.container}>
           <Image
             style={styles.thumbnail}
             source={{uri: this.props.list[5]}}
           />
         </View>
         <View style={styles.container}>
           <Image
             style={styles.thumbnail}
             source={{uri: this.props.list[6]}}
           />
         </View>
         <View style={styles.container}>
           <Image
             style={styles.thumbnail}
             source={{uri: this.props.list[7]}}
           />
         </View>
      </Carousel>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     width: 375,
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'transparent',
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
  thumbnail: {
    marginTop : 30,
    width: 245,
    height: 435,
  },
  bg : {
    flex : 1,

    resizeMode: 'cover',
  },
  bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        width:Dimensions.get('window').width,
        height : Dimensions.get('window').height,
        resizeMode: 'cover'
    },
});

export default Category;
