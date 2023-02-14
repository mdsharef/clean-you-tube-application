import { Button, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ButtonLink = ({routeLink, text, children}) => {
    return (
        <Button>
            <Link component={RouterLink} to={routeLink} sx={{ textDecoration: 'none' }}>
                <Stack direction='row' alignItems='center' spacing={0.5}>
                    {children}
                    <Typography variant='body1' color='text.primary'>
                        {text}
                    </Typography>
                </Stack>
            </Link>
        </Button>
    )
};

export default ButtonLink;