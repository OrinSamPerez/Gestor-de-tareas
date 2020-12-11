import React, {Component} from 'react';
import axios from 'axios';
 class Card extends Component{
     constructor(props){
         super(props);

         this.state={
            tareas:[]
         }
     }
     componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos').
        then(resp => console.log(resp))
        }
     render(){
         const {tareas} = this.state;
    
     return(
        <>
        <h1>hola mundo</h1>
        </>
     )
    };
 }
 export default Card;