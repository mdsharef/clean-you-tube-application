import { Link as RouterLink } from 'react-router-dom';
import { IconButton, Link, Stack, Typography } from "@mui/material";
import { HiBars3 } from 'react-icons/hi2'
import { FaYoutube } from 'react-icons/fa';
import DrawerComp from './DrawerComp';
import { useState } from 'react';

const MobileAppbar = ({ handleSnackOpen }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Stack
                direction="row"
                alignItems='center'
                justifyContent='space-between'
                flexGrow={1}
            >
                <Stack 
                    direction='row' 
                    alignItems='center' 
                    spacing={0.5}
                >
                    <Link component={RouterLink} to='/' sx={{ textDecoration: 'none' }}>
                        <Stack direction='row' alignItems='center' spacing={0.5}>
                            <FaYoutube style={{fontSize: '20px'}} />
                            <Typography variant='h6' color='text.primary'>
                                Clean YouTube
                            </Typography>
                        </Stack>
                    </Link>
                </Stack>
                <IconButton color='primary' onClick={handleOpen}>
                    <HiBars3 />
                </IconButton>
            </Stack>
            <DrawerComp 
                open={open}
                handleClose={handleClose}
                handleSnackOpen={handleSnackOpen} 
            />
        </>
    )
}

export default MobileAppbar;