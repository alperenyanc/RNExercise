import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
 
import GlobalState from './modules/Context/GlobalState';
import MyButton from './modules/MyButton'
 import MyText from './modules/MyText'
 import MyText2 from './modules/MyText2'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}} >
      <GlobalState>
        
        <View style={styles.container}>
          <MyButton />
          <MyText/>
 
        </View>
      </GlobalState>
    </SafeAreaView>
  );
}

export default App


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  },
   
});
