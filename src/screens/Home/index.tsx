import { Text, View, Image, FlatList } from "react-native";
import  Logo  from "../../../assets/Logo.png";
import { styles } from "./styles";
import { InputTask } from "../../components/InputTask";
import { Counter } from "../../components/Counter";
import Void from "../../components/Void";
import Task from "../../components/Task";
import { useState } from "react";

interface TaskProps {
   id: number;
   task: string;
   finished: boolean
}

export function Home(){

   const [ tasks, setTasks ] = useState<TaskProps[]>([])

   const counterTask : number = tasks.length

   const counterFinished : TaskProps[] = tasks.filter(task => task.finished === true)

   function handleCreateTask (task:string){
      const newTask : TaskProps = {
         id: Math.random(),
         finished: false,
         task: task
      }

      if(newTask) {
         setTasks(prevState => [...prevState, newTask])
      }
   }

   function handleDeleteTask( id: number) {
      setTasks(() => tasks.filter(task => task.id !== id))
   }

   function handleSetFinished (id:number){
     const task : TaskProps | undefined = tasks.find(task => task.id === id);

     const oldTasks : TaskProps[] = tasks.filter(task => task.id !== id)

     if(task){
      task.finished = !task.finished
      setTasks([...oldTasks,task] )
     }
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image style={styles.logo}
            source={Logo}
            resizeMode="contain"
            /> 
         </View>
         <View style={styles.main}>

            <InputTask 
               handleCreateTask={handleCreateTask}
            />

            <View>
               <View style={styles.headerCounter} >
                  <Counter
                     colorText="#4EA8DE"
                     currentNumber={counterTask}
                     title="criadas"
                  />
                  <Counter
                     colorText="#8284FA"
                     currentNumber={counterFinished.length}
                     title="concluídas"
                  />
               </View>

               <FlatList
                  data={tasks}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                     <Task
                        key={item.id}
                        id={item.id}
                        task={item.task}
                        finished={item.finished}
                        onRemove={handleDeleteTask} 
                        onFinished={handleSetFinished}
                     />
                  )}
                  ListEmptyComponent={<Void/>}
                  showsVerticalScrollIndicator={false}
               />
            </View>
         </View>
      </View>
   )
}