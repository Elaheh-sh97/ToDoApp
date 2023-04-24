import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable} from 'react-native';
import FirstSlide from './page/FirstSlide';
import SecondSlide from './page/SecondSlide';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
  
    <NavigationContainer>
    <Stack.Navigator initialRouteName="First">
      <Stack.Screen  name="First" component={FirstSlide} options={{title:'Home'}}/>
      <Stack.Screen  name="Second" component={SecondSlide} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}





const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent:'center'

  },
  bottomBtn:{
    alignItems:'center',
    backgroundColor:'#2bcbd6',
width:'100%',
minHeight:130,
borderTopRightRadius:160,
borderTopLeftRadius:160,

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
