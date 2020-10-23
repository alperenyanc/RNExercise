import React from 'react';
import Context from './context';

export default class GlobalState extends React.Component {
  state = {
   
    number:0
  };

   

   
  increaseNumber=()=>{
      this.setState({number:this.state.number +1 })
  }
  render() {
     
     
    return (
      <Context.Provider
        value={{
         
          number:this.state.number,
           
          increaseNumber:this.increaseNumber,
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
