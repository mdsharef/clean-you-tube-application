import { useState } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import PlaylistDialog from "../playlist-dialog";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import useError from "../../hooks/useError";
import ErrorMsg from "../ui/ErrorMsg";


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
    const { snack, handleSnackClose, handleSnackOpen } = useError()
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="default" sx={{ py: 1 }}>
                    <Toolbar>
                        <LeftPart />
                        <RightPart />
                        <Button variant="contained" onClick={handleClickOpen}>Add Playlist</Button>
                        <PlaylistDialog 
                            open={open} 
                            handleClose={handleClose} 
                            handleSnackOpen={handleSnackOpen}
                        />
                    </Toolbar>
            </AppBar>
            <ErrorMsg 
                open={snack.open}
                handleClose={handleSnackClose}
                message={snack.message}
                severity={snack.severity}
            />
        </Box>
    )
};

export default Navbar;