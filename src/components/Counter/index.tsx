import { View,Text } from "react-native"
import { styles } from "./styles";

interface CounterTextProps {
   title: string;
   currentNumber: number;
   colorText: string;
}

export function Counter({colorText, currentNumber, title}:CounterTextProps){

   const perso ={
      ...styles.text,
      color:colorText
   }


   return(
      <View style={styles.container}>
         <Text style={perso}> {title}</Text>
         <Text style={styles.textNumber}>{currentNumber}</Text>
      </View>
   )
}