import React ,{useContext}from 'react';
import {View, TextInput,Text,Button, StyleSheet} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const Home=({navigation})=>{

  const {logout} = useContext(AuthContext);
    
return(
    <View>
        <Text>Home is here</Text>
        <Button
        title="login"
        onPress={() => logout()}
        // onPress={() => navigation.navigate('Login')}
      />
    </View>
)
}
export default Home;