import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Pressable} from 'react-native';

export default function FirstSlide({navigation}){
    return (
    <View style={styles.container}>
        <View>
 <Image style={styles.img} source={require("../assets/first.png")}/>
 </View>
 <View style={styles.textStyle}>
     <Text style={styles.headerText}>You decide how to manage your tasks</Text>
     <Text style={styles.textBody}>
         On my own offers you to be your own project manager super easily.
         You can do scheduling,meetings,reminders,to-do list and more.
     </Text>
 </View>
 <View style={styles.bottomBtn}>
<Pressable><Text style={styles.startBtn} onPress={()=>navigation.navigate('Second')}>Start</Text></Pressable>
</View>
    </View>
)}

const styles=StyleSheet.create({
    container:{
flex:1,
alignItems:'center',
backgroundColor: '#fff',

    },
img:{
    width:300,
    height:400,
},

textStyle:{
width:230,
marginBottom:40,
},

headerText:{
fontWeight:'bold',
fontSize:17,
textAlign:'center'
},
textBody:{
    textAlign:'center'
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
  }
});