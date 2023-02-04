import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Button, Link, Stack, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import PlaylistDialog from "../playlist-dialog";

/**
 * Navbar Component to display the header. This component contains logo and addPlaylist button.
 * @component
 * @example
 * return (
 *  <Navbar />
 * )
 * @returns <Navbar />
 */
const Navbar = ({ addPlaylist }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getPlaylist = (playlistID) => {
        addPlaylist(playlistID);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="default" sx={{ py: 2 }}>
                <Container maxWidth='lg'>
                    <Toolbar>
                        <Stack sx={{ flexGrow: 1 }}>
                            <Link component={RouterLink} to='/' sx={{ textDecoration: 'none' }}>
                                <Typography variant='h4' color='text.primary'>
                                    Clean YouTube
                                </Typography>
                            </Link>
                            <Link href="https://github.com/mdsharef" target="_blank" sx={{ textDecoration: 'none' }}>
                                <Typography variant='body1' color='text.secondary'>
                                    By Adda
                                </Typography>
                            </Link>
                        </Stack>
                        <Button variant="contained" onClick={handleClickOpen}>Add Playlist</Button>
                        <PlaylistDialog open={open} handleClose={handleClose} getPlaylist={getPlaylist} />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
};

export default Navbar;