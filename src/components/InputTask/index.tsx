import { TextInput, TouchableOpacity, View,Text, Image } from "react-native";
import Trash from '../../../assets/trash.png'
import { styles } from "./styles";
import { useState } from "react";

interface InputTaskProps {
   handleCreateTask: (task:string) => void;
}

export function InputTask( { handleCreateTask } :InputTaskProps) {

   const [ textTask , setTextTask ] = useState('')

   function cleanInputAfterCreateTask(task:string){
      handleCreateTask(task)
      setTextTask('')
   }

   return   (
      <View style={styles.container}>
         <TextInput 
            style={styles.input}
            placeholder="Adicione uma tarefa"
            placeholderTextColor={'#808080'}
            onChangeText={setTextTask}
            value={textTask}

         />
         <TouchableOpacity
            style={styles.addBtn}
            onPress={() => cleanInputAfterCreateTask(textTask)}
         >
           <Text style={styles.icon}>+</Text>
         </TouchableOpacity>
      </View>
   )  
}