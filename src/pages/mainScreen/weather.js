import React from "react";
import {StyleSheet,View,Text,Button} from "react-native";

const weather=()=>{
  return(
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
};
export default weather;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1e90ff",
  }
})