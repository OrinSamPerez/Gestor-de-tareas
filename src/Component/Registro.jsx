import React, {Component} from 'react';
import AgregarTarea from './AgregarTarea.jsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';


const Registro = ()=>{
        const registroStyle = makeStyles({
            espacio:{
                marginTop:'10px'
            },
            espacioLeft:{
                marginLeft:'10px'
            },
            center:{
                justifyContent:'center'
            }
        })
        const style = registroStyle();
    
        const enviarRegistro = ()=>{
            
            let Usuario = document.getElementById('Usuario').value;
            let Correo = document.getElementById('Correo').value;
            let Contraseña = document.getElementById('Com_Contraseña').value;
            firebase.auth()
            .createUserWithEmailAndPassword(Correo, Contraseña)
            .then((User) =>{
                
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                      // User is signed in, see docs for a list of available properties
                      // https://firebase.google.com/docs/reference/js/firebase.User
                      var uid = user.uid;
                      window.location=`http://localhost:3000/home/${uid}`;
                    } else {
                      // User is signed out
                      // ...
                    }
                  });
                
            })
            .catch((error)=>{
                let errorCode = error.code;
                var errorMessage =error.message;
                if(errorCode === 'auth/email-already-in-use'){
                    let alerta = document.getElementById('alerta')
                    let div = document.createElement('div');
                    div.innerHTML = `
                        <Alert severity="success">This is a success alert — check it out!</Alert>

                    `; 
                    alerta.appendChild(div);
                }else{
                    
                    console.log('Hpña')
                }
            });
        } 
        return(
            <>
            <div className={style.card}>
                <form>
                <div className={style.espacio}>
                    <TextField
                    id="Usuario"
                    label="user" 
                    />
                </div>
                <div className={style.espacio}>
                    <TextField
                    id="Correo"
                    label="Correo" 
                    />
                </div>

                <div className={style.espacio}>
                    <TextField
                    id="Contraseña"
                    label="Contraseña" 
                    />
                </div>
                <div className={style.espacio}>
                    <TextField
                    id="Com_Contraseña"
                    label="Comfirmar Contraseña" 
                    />
                </div>
                <div className={style.espacio}>
                    <Button variant="contained" color="secondary" >
                    Google
                    </Button>
                    <Button className={style.espacioLeft}   variant="contained" color="primary">
                     Facebook
                    </Button>
                </div>
                <div className={style.espacio}>
                    <Button className={style.center} onClick={enviarRegistro} variant="contained" size="large" color="default">
                    Enviar
                    </Button>
                </div>
            </form>
           
           
            <div id="alerta"></div>
            </div>
            </>
        )
}


export default Registro;