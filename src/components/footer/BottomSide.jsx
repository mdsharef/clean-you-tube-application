import { MdCopyright } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { IconButton, Stack, Typography } from "@mui/material";

const BottomSide = () => {
    return (
        <Stack 
            direction='row' 
            justifyContent='center'
            alignItems='center'
            sx={{width: '100%'}}
        >
            <Typography 
                component='div' 
                variant='body1' 
                color='text.secondary'
                sx={{letterSpacing: 1.3}}
            >
                Copyright Preserved <MdCopyright style={{fontSize: '18px'}} /> Md Shareful Islam |
            </Typography>
            <IconButton href='https://www.github.com/mdsharef' target='_blank'>
                <BsGithub />
            </IconButton>
        </Stack>
    )
};

export default BottomSide;