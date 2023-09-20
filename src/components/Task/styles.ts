import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
   container:{
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:12,
      paddingHorizontal:10,
      backgroundColor:'#262626',
      borderWidth:1,
      borderStyle:'solid',
      borderColor:'#333',
      borderRadius:5,
      gap:8,
      marginBottom:12
   },
   text:{
      flex:1,
      fontSize:14,
      lineHeight:19.6,
      textAlign:'justify',
      paddingHorizontal:6
   },
   underline:{
      textDecorationLine: 'line-through'
   },
   trash:{
      height:32,
      width:32,
      alignItems:'center',
      justifyContent:'center'
   },
   check:{
      height:24,
      width:24,
      alignItems:'center',
      justifyContent:'center'
   },
   img:{
      height:17,
      width:15
   }
})