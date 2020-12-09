import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Triste from '../img/triste.svg';
import ColorizeIcon from '@material-ui/icons/Colorize';
import MicNoneIcon from '@material-ui/icons/MicNone';




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
    }

})
const AgregarTarea = ()=>{
    const [open, setOpen] = React.useState(false);
  const ModalOpen = () => {
    setOpen(true);
  };

  const ModalClose = () => {
    setOpen(false);
  };

    const style = styleMenu();
    return (
        <>
        <Button  variant="contained" color="primary" className={style.botonAgregar} onClick={ModalOpen} size="large" >
            Agregar Tarea
        </Button>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={style.modal}
        open={open}
        onClose={ModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        
        <>
        <div className={style.mainModal}>
            <div>
                <Typography variant="h6" color="initial">Agregar nueva tarea</Typography>
                <form  noValidate autoComplete="off">
                    <div>
                            <TextField
                            id=""
                            label="Nombre de la tarea"
                            /*  value={} */
                        /*    onChange={} */
                            className={style.tamaño}
                            
                            />
                    </div>
                  
                    <div className={style.espacio}>
                    <TextField
                      id=""
                      label="Descripcion de la tarea"
                     /*  value={} */
                   /*    onChange={} */
                       rows={4}
                       rowsMax={6}
                      
                       className={style.tamaño}
                       size="large"
                       multiline
                        
                    />
                    
                    </div>
                </form>
            </div>
            <div className={style.personalizado}>
            <a className={style.icon} href="#"><ColorizeIcon/></a>
            <a className={style.icon} href="#"><MicNoneIcon/></a>
            </div>
            <div className={style.espacio}>
                <Button variant="contained" color="primary" size="medium" className={style.espacioLeft}>
                Agregar
                </Button>
                <Button variant="contained" color="secondary" onClick={ModalClose}>
                Cancelar
                </Button>
            </div>
        </div>
        </>
      </Modal>
        <div>
            <div >
                <img className={style.faceSad} src={Triste} alt="Cara Triste"/>
            </div>
            <div className={style.center}>
                <Typography variant="subtitle1" color="initial">
                    Todavia no se ha agregado tarea
                </Typography>
            </div>
        </div>
    </>
    )
}
export default AgregarTarea;