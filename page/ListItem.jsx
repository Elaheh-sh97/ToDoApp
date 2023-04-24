import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,Button, Pressable,Modal,ScrollView,FlatList} from 'react-native';

function ListItem(props){
    const[toDoSubject,updateToDoSubject]=useState('');
    const[toDoList,updateToDoList]=useState([]);
    function takeInput(input){
    updateToDoSubject(input);
    }
    
    
    function makeList() {
    toDoList.push(toDoSubject);
    console.log(toDoList);
    }
return (

<View>

<Modal style={styles.modal}>
<View>
<TextInput style={styles.listInput} placeholder="list" onChangeText={takeInput}/>
</View>
<Pressable><Text style={styles.addBtn} onPress={makeList}>Add</Text></Pressable>
<FlatList data={toDoList} renderItem={(goal)=><Text style={styles.item}>{goal.item}</Text>}/>
</Modal>
</View>

)
};




const styles=StyleSheet.create({
item:{
    backgroundColor:"#248f8f",
    width:200
}
});

export default ListItem;