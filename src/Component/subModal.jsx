import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';



const subModal = ()=>{
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
            <Typography variant="h1" color="initial">
                Hola
            </Typography>
        </div>
        </>
      </Modal>
}