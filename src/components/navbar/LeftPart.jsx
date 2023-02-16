import { Link as RouterLink } from 'react-router-dom';
import { Link, Stack, Typography } from "@mui/material";
import { FaYoutube } from 'react-icons/fa';
import SearchInput from './SearchInput';

const LeftPart = () => {
    return (
        <Stack 
            sx={{ flexGrow: 1 }} 
            direction='row' 
            alignItems="center"
            spacing={8}
        >
            <Stack>
                <Stack direction='row' alignItems='center' spacing={0.5}>
                    <Link component={RouterLink} to='/' sx={{ textDecoration: 'none' }}>
                        <Stack direction='row' alignItems='center' spacing={0.5}>
                            <FaYoutube style={{fontSize: '20px'}} />
                            <Typography variant='h6' color='text.primary'>
                                Clean YouTube
                            </Typography>
                        </Stack>
                    </Link>
                </Stack>
                <Typography variant='body1' color='text.secondary'>
                    <Link 
                        href="https://github.com/mdsharef" 
                        target="_blank" 
                        sx={{ textDecoration: 'none' }}
                        color='text.secondary'
                    >
                        By Adda
                    </Link>
                </Typography>
            </Stack>
            <SearchInput />
        </Stack>
    )
};

export default LeftPart;