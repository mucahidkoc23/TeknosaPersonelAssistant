import React from "react";
import {StyleSheet,View,Text,Button} from "react-native";

const note=()=>{
  return(
    <View style={styles.container}>
     <Text>Hello</Text>
    </View>
  );
};
export default note;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1e90ff",
  }
})