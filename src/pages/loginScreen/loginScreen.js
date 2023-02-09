import React from "react";
import {View,TextInput,TouchableOpacity,Button,StyleSheet} from "react-native";

const loginScreen = ({navigation}) => {
 return(
<View style={styles.container}>
  <View style={styles.textInputView}>
    <TextInput style={styles.textInput} placeholder="User Name" />
    <TextInput style={styles.textInput} placeholder="Password"  secureTextEntry={true}/>
            
    <TouchableOpacity style={styles.buttonStyle}>
     <Button color={"#00008b"} 
     title="Giriş" 
     onPress={()=>navigation.navigate('Profile')}/> 
    </TouchableOpacity>
  </View>           
</View>
);
};

const styles = StyleSheet.create({  
  container: { 
    flex: 1,   
    justifyContent:"center",
    backgroundColor:'#1e90ff',  
  }, 
  buttonStyle:{   
    width:150,
    borderRadius:7,    
    backgroundColor:"yellow",   
    color:"a52a2a",
  },
  textInput:{
    backgroundColor:"white",
    fontSize: 20,    
    margin: 10,    
    height:45,
    width:260,
    borderRadius:7,
  },
  textInputView:{
    justifyContent: 'space-around',   
    alignItems: 'center',   
  },
});
export default loginScreen;