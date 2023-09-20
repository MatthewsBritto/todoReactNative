import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor: '#1A1A1A',
   },
   header:{
      width:'100%',
      height:173,
      backgroundColor:'#0D0D0D',
      alignItems:'center',
      justifyContent:'center',
   },
   logo:{
      width: 110,
      height:32
   },
   main:{
      flex:1,
      paddingHorizontal:16,
      backgroundColor:'#191919'
   },
   headerCounter:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingBottom:20,
   },
})