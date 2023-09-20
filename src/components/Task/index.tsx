import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import Check from '../../../assets/check.png'
import Trash from '../../../assets/trash.png'
import Checked from '../../../assets/checked.png'
import { styles } from "./styles";

interface TaskProps {
   id: number;
   task: string;
   finished: boolean;
   onRemove: (id:number) => void;
   onFinished: (id: number ) => void;
}

export default function Task(
   {finished, id, task, onRemove,onFinished}: TaskProps) {

   const textPerso = {
      ...styles.text,
      color: finished ? '#808080' :'#F2F2F2',
   }

  return (
    <View style={styles.container} key={id}>
      <TouchableOpacity 
         style={styles.check}
         onPress={() => onFinished(id)}
      >
         { finished ? 
            <Image source={Checked}/> : <Image source={Check}/> }
      </TouchableOpacity>

      <Text style={[textPerso, finished && styles.underline]}>
         {task}
      </Text>

      <TouchableOpacity
         style={styles.trash}
         onPress={() => onRemove(id)}
      >

         <Image
            source={Trash}
            style={styles.img}
         />
      </TouchableOpacity>
    </View>
  )
}
