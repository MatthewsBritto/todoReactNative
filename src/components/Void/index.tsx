import { Image, View, Text } from "react-native";
import Clipboard from '../../../assets/Clipboard.png'
import { styles } from "./styles";

export default function Void() {
  return (
      <View style={styles.container}>
         <Image 
            source={Clipboard}
            style={styles.img}
         />
         <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
         <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
  )
}
