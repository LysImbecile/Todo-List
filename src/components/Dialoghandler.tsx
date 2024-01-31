import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface FormDialogProps {
    title: string;
    contentText: string;
    open: boolean;
    onConfirm: (text: string) => void;
    handleClickOpen: () => void;
    handleClose: () => void;
  }

  export default function FormDialog({ onConfirm, title, contentText, open, handleClickOpen, handleClose }: FormDialogProps) {
    const [textvalue, setTextValue] = React.useState('');
  
    const handlerconfirm = () => {
      onConfirm(textvalue);
      handleClose();
    }
  
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextValue(event.target.value);
    }
  
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{contentText}</DialogContentText>
            <TextField 
              autoFocus 
              margin="dense" 
              label="Name" 
              type="text" 
              fullWidth 
              value={textvalue} 
              onChange={handleTextChange} // Adicione este manipulador de eventos
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handlerconfirm}>Submit</Button> 
          </DialogActions>
        </Dialog>
      </div>
    );
  }