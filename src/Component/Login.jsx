import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel'

const Login = ()=>{
    return(
        <>
     
        <div>
            <FormControl>
              <FormLabel>Iniciar Seccion</FormLabel>
              <TextField
                  id="user"
                  label="Usuario"                  
                />
              <FormHelperText></FormHelperText>
            </FormControl>
        </div>
    
    </>
    )
}
export default Login;