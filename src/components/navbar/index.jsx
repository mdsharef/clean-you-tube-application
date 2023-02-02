import { useState } from "react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
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
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addPlaylist = (playlistID) => {
        console.log(playlistID);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='default' sx={{ py: 2 }}>
                <Container maxWidth='lg'>
                    <Toolbar>
                        <Stack sx={{ flexGrow: 1 }}>
                            <Typography variant='h4'>
                                Clean YouTube
                            </Typography>
                            <Typography variant='body1'>
                                By Adda
                            </Typography>
                        </Stack>
                        <Button variant="contained" onClick={handleClickOpen}>Add Playlist</Button>
                        <PlaylistDialog open={open} handleClose={handleClose} addPlaylist={addPlaylist} />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
};

export default Navbar;