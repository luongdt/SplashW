/**
* @Author: luongtd
* @Date:   2016-07-21T00:49:24-07:00
* @Last modified by:   luongtd
* @Last modified time: 2016-07-25T23:56:36-07:00
*/



import React, { Component } from 'react';
import {PropTypes} from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};



const SideMenu = (props, context) => {
  const drawer = context.drawer;
    return (
      <View style={styles.menu}>
        <View style={styles.header}>
        <Text style={styles.menutitle}>
          Menu
        </Text>
        </View>
         <FontAwesome.Button name="home" backgroundColor="transfer">
          <Text style={{fontFamily: 'Arial', fontSize: 18}}>Home</Text>
        </FontAwesome.Button>
        <TouchableOpacity onPress={() => { drawer.close(); Actions.main(); }}>

        <Text style={styles.itemmenu}>
          Home
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { drawer.close(); Actions.new(); }}>
        <Text style={styles.itemmenu}>
          New
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { drawer.close(); Actions.favorite(); }}>
        <Text style={styles.itemmenu}>
          Favorite
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { drawer.close(); Actions.setting(); }}>
        <Text style={styles.itemmenu}>
          Setting
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { drawer.close(); Actions.rate(); }}>
        <Text style={styles.itemmenu}>
          Rate
        </Text>
        </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#DCDCDC',

  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  header: {
    width : 300,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4EE2EC',
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
  menutitle : {
    color : '#FFFAF0',
    fontSize: 20,
    alignItems: 'center',
    justifyContent : 'center',

  },
  itemmenu : {
    color : '#666666',
    marginTop : 20,
    marginLeft : 20,
    marginBottom : 20,
    fontSize : 18,
  }
});
SideMenu.contextTypes = contextTypes;
SideMenu.propTypes = propTypes;
export default SideMenu;
