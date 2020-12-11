import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

class Login extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const singIp = ()=>{
            let email = document.getElementById('Correo');
            let password = document.getElementById('password');

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
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
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                if(errorCode === 'auth/argument-error'){
                   console.log('hpña')
                }
            });
            

        } 
        return( 
            <>
            <form>
                <TextField
                  id="Correo"
                  label="Correo Electronico"                  
                    />
                 <FormControl>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="password"
                     
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                       
                            >
                      
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <Button onClick={singIp}variant="text" color="default">
                  Enviar
                </Button>
                </form>
           </>
        )
    }
};
export default Login;