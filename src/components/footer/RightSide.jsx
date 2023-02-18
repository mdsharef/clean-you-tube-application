import { Link as RouterLink } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';
import { Link, Stack, Typography } from "@mui/material";
import SocialLink from './SocialLink';
import OtherLink from './OtherLink';

const RightSide = () => {
    return (
        <Stack 
            alignItems='center' 
            justifyContent='center'
        >
            <Stack direction='row' alignItems='center' spacing={0.5}>
                <Link component={RouterLink} to='/' sx={{ textDecoration: 'none' }}>
                    <Stack direction='row' alignItems='center' spacing={0.5}>
                        <BsYoutube style={{fontSize: '20px'}} />
                        <Typography variant='h5' color='text.primary'>
                            Clean YouTube
                        </Typography>
                    </Stack>
                </Link>
            </Stack>
            <SocialLink />
            <OtherLink />
        </Stack>
    )
};

export default RightSide;