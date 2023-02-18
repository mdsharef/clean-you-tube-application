import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdSend } from 'react-icons/md';
import { Alert, Button, Snackbar, Stack, TextField, Typography } from '@mui/material';

const initValue = {
    user_name: '',
    user_email: '',
    message: '',
}

const openInit = {
    value: false,
    message: '',
    severity: ''
}

const LeftSide = () => {
  const form = useRef();
  const [state, setState] = useState({...initValue});
  const [open, setOpen] = useState({...openInit});

  const handleChange = (event) => {
    setState({
        ...state,
        [event.target.name]: event.target.value,
    })
  };

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen({...openInit});
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
      .then((result) => {
        if(result) {
            setState({...initValue});
            setOpen({
                ...open,
                value: true,
                message: 'Message sent successfully!',
                severity: 'success',
            });
        }
      }, (error) => {
        if(error) {
            setOpen({
                ...open,
                value: true,
                message: 'Something went wrong!',
                severity: 'error',
            })
        }
      });
  };

  return (
    <Stack alignItems='center' justifyContent='center'>
        <form ref={form} onSubmit={sendEmail}>
            <TextField 
                fullWidth
                label='Name'
                variant='outlined'
                name='user_name'
                margin='dense'
                value={state.user_name}
                onChange={handleChange}
                sx={{
                    marginTop: '10px'
                }}
            />
            <TextField 
                fullWidth
                type='email'
                label='Email'
                variant='outlined'
                name='user_email'
                margin='dense'
                value={state.user_email}
                onChange={handleChange}
                sx={{
                    marginTop: '10px'
                }}
            />
            <TextField 
                fullWidth
                maxRows={5}
                label='Message'
                variant='outlined'
                name='message'
                value={state.message}
                onChange={handleChange}
                sx={{
                    marginTop: '10px'
                }}
            />
            <Typography component='div' align='right' mt={2}>
                <Button 
                    variant='contained' 
                    size='medium' 
                    type='submit'
                    endIcon={<MdSend />}
                >
                    Send
                </Button>
            </Typography>
        </form>
        <Snackbar 
            open={open.value} 
            autoHideDuration={6000} 
            onClose={handleClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        >
            <Alert onClose={handleClose} severity={open.severity} sx={{ width: '100%' }}>
                {open.message}
            </Alert>
        </Snackbar>
    </Stack>
  );
};

export default LeftSide;