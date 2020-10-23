import React,{Component} from 'react'
import { StyleSheet,  Button,View } from 'react-native'
import Context from './Context/context'
 
 export default class MyButton extends Component {
    constructor(props){
        super(props);
        this.state = {
       number:0
        }
       } 
    static contextType = Context;
     render() {
         return (
             <View>
               <Button title='Press Me'
               
               onPress={()=>this.context.increaseNumber(this.state.number)}
                />
             </View>
         )
     }
 }
 
 const styles = StyleSheet.create({})
 