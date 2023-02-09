import React from "react";
import {StyleSheet,View,Text,Button} from "react-native";

const settings=()=>{
  return(
    <View style={styles.container}>
      <Text>UserName:</Text>
    </View>
  );
};
export default settings;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1e90ff",
  }
})