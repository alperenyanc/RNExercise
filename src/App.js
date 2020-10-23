import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, Button } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
     <MyButton/>
     <MyText />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
const MyText = ()=><Text>alp</Text>
const MyButton = ()=><Button title='Press Me' onPress={()=>alert('arttırılack')} />