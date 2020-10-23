import React,{Component} from 'react'
import { StyleSheet, Text } from 'react-native'
import Context from './Context/context'

 

export default class MyText extends Component {
    constructor(props){
        super(props);
        
       } 
       static contextType = Context;
       render() {
        return (
            
            <Text  style={{fontSize:14}} >{this.context.number}</Text>
            
        )
    }

}
//  const MyText=()=>{
//     // const contextType = Context;
//     return(
//         <Text  style={{fontSize:14}} >{this.Context.number}</Text>
//     )
// }
// export default MyText
