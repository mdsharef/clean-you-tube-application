import { Link as RouterLink } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

/**
 * @component NotFound
 * @example
 * return(<NotFound />)
 * @returns (<NotFound />) The
 */
const NotFound = () => {
    return (
        <Container maxWidth='lg' align='center' sx={{ my: 16 }}>
            <Box>
                <Typography variant="h3" color='Highlight'>
                    OPS!
                </Typography>
                <Typography variant="h4" color='GrayText'>
                    Sorry, Page Not Found.
                </Typography>
                <Link component={RouterLink} to='/' sx={{ textDecoration: 'underline' }}>
                    <Typography variant='body1' color='text.secondary'>
                        Please, Back to Home Page!
                    </Typography>
                </Link>
            </Box>
        </Container>
    )
};

export default NotFound;