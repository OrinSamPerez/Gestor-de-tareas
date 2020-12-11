import {makeStyles} from '@material-ui/core/styles';
const styleMenu = makeStyles ({
    botonAgregar:{
        margin:'auto',
        display:'block',
        justifyContent:'center',
        marginTop:'30px'
        
    },
    modal:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'10%'
    },
    mainModal:{
        background:'#fff',
        padding:'30px',
        paddingLeft:'50px',
        paddingRight:'50px',
        borderRadius:'3%',
        margin: 'spacing(1)',
        fontSize:'25px'   
    }, 
    espacio:{
        marginBottom:'15px'
    },
    espacioLeft:{
        marginRight:'10px'
    },
    personalizado:{
        textAlign: 'center',
        marginBottom:'15px'
    },
    tamaño:{
        textAlign:'center',
        width:'200px',
        marginBottom:'15px'
    },
    faceSad:{
        marginTop:'15px',
        wight:'350px',
        height:'350px',
        margin:'auto',
        display:'block'
    },
    center:{
        textAlign:'center',
        marginTop:'15px'
    }, 
    icon:{
        marginRight:'15px'
    },
    black:{
        color:'black'
    },
    blue:{
        color:'blue'
    }

})
export default styleMenu;