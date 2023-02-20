import { Button } from "@mui/material";
import { useState } from "react";
import PlaylistDialog from "../playlist-dialog";

const AddPlaylistBtn = ({handleSnackOpen}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                Add Playlist
            </Button>
            <PlaylistDialog 
                open={open} 
                handleClose={handleClose} 
                handleSnackOpen={handleSnackOpen}
            />
        </>
    )
};

export default AddPlaylistBtn;