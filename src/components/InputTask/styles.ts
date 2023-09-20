import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container:{
      flexDirection:'row',
      gap:4,
      position:'relative',
      top:-35
   },
   input:{
      flex:1,
      height:56,
      paddingHorizontal:16,
      width:132,
      fontSize:16,
      backgroundColor:'#262626',
      borderRadius:4,
      borderWidth:1,
      borderColor:'#0D0D0D',
      borderStyle:'solid',
      color:'#FFF',
   },
   addBtn:{
      width:52,
      height:54,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#1E6F9F',
      borderRadius:4,
   },   
   icon:{
      color:'#fff',
      fontSize:15,
      width:25,
      borderWidth:1,
      borderColor:'#FFF',
      borderStyle:'solid',
      borderRadius:50,
      textAlign:'center'
   }
})