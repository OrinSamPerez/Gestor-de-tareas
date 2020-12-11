import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Triste from '../img/triste.svg';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import MicNoneIcon from '@material-ui/icons/MicNone';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TimerIcon from '@material-ui/icons/Timer';
import styleMenu from '../Style/style.js';



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
                <a className={style.icon} title="Agregar Temporizador" ><TimerIcon fontSize="large" className={style.black}/></a>
                <a className={style.icon} title="Agregar Iconos" ><NoteAddIcon fontSize="large" className={style.blue}/></a>
                <a className={style.icon} title="Agregar Tarea Existente" ><AddCircleIcon fontSize="large" /></a> 
                <a className={style.icon} title="Agregar Por Voz" ><MicNoneIcon  id="Voz" fontSize="large"   color="action" /></a> 
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
        
    </>
    )
}
export default AgregarTarea;