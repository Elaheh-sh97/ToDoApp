import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image,TextInput,Button, Pressable,Modal,ScrollView,FlatList} from 'react-native';
import { useState } from "react";




export default function SecondSlide({navigation}){
const[toDoSubject,updateToDoSubject]=useState('');
const[toDoList,updateToDoList]=useState([]);
const[setVisible,changeSetVisible]=useState(false);

function takeInput(input){
updateToDoSubject(input);
}


function makeList() {
toDoList.push(toDoSubject);
console.log(toDoList);
}



return(
    <>
<View style={styles.container}>
    <Image style={ styles.img} source={require('../assets/second.png')}/>
<Text style={styles.text}>Please enter your name</Text>
<TextInput style={styles.input} placeholder="Name"/>
<Button title='Add' onPress={()=>changeSetVisible(true)}/>
<View style={styles.bottomBtn}>
<Pressable><Text style={styles.startBtn} onPress={()=>navigation.goBack()}>Start</Text></Pressable>
</View>
</View>

<View style={styles.modal}>
<Modal animationType="slide" onRequestClose={()=>changeSetVisible(!setVisible)}
visible={setVisible}>
    <View style={styles.modal}>
<TextInput style={styles.listInput} placeholder="Enter your goal..." onChangeText={takeInput}/>
<Pressable style={styles.addGoalPress}><Text style={styles.addBtn} onPress={makeList}>Add</Text></Pressable>
<FlatList data={toDoList} renderItem={(goal)=><Pressable onPress={(goal)=>toDoList.pop(goal)}><Text style={styles.item}>{goal.item}</Text></Pressable>}/>
</View>
</Modal>
</View>
</>
)};



const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    //    justifyContent:'center',
     minHeight:800
    },
    img:{
        width:350,
        height:350,  
    },
    text:{
fontWeight:'bold',
fontSize:19
    },
    input:{
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:'#2bcbd6',
        width:190,
        padding:6,
        marginBottom:50
    },
    bottomBtn:{
        alignItems:'center',
        backgroundColor:'#2bcbd6',
    width:'100%',
    minHeight:130,
    borderTopRightRadius:160,
    borderTopLeftRadius:160,
 position:'absolute',
 bottom:0
    
      },
      startBtn:{
        backgroundColor:'#ffd505',
        width:60,
        height:60,
        borderRadius:100,
    textAlignVertical:'center',
        textAlign:'center',
        marginTop:-20,
        fontWeight:'bold'
      },
      listInput:{
          borderColor:"black",
          borderWidth:1,
          width:250,
          marginTop:20,
          padding:5,
          borderRadius:8
      },
      item:{
        backgroundColor:"#2eb8b8",
        width:200,
        margin:10,
        borderRadius:5,
        padding:8,
       color:'white'
    },
    addBtn:{
        backgroundColor:'#ffd505',
        width:60,
        height:40,
        borderRadius:10,
        textAlignVertical:'center',
        textAlign:'center',
        
    },
    modal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       marginTop:60,
    },
    addGoalPress:{
        marginTop:5
    }
})