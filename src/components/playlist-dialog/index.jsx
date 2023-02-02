import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

/**
 * PlaylistDialog Component to add new playlist.
 * @component
 * @example 
 * return (
 *  <PlaylistDialog open={open} handleClose={handleClose} addPlaylist={addPlaylist} />
 * )
 * @param {{open: boolean, handleClose: function, addPlaylist: function}} props props passed to the PlaylsitDialog Component.
 * @returns <PlaylistDialog props={"*"} />
 */
const PlaylistDialog = ({ open, handleClose, addPlaylist }) => {
    const [state, setState] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle url
        if(!state) {
            alert('Please insert a valid playlistID or url');
        } else {
            addPlaylist(state);
            setState('');
            handleClose();
        }
    }

  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Playlist ID to add new playlist</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To add a new playlist, please insert the playlist id or playlist link here. Please make sure the link is correct. Otherwise, we won't be able to fetch the playlist information.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="playlistID"
                label="Playlist ID"
                fullWidth
                variant="standard"
                onChange={(e) => setState(e.target.value)}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
    </Dialog>
  );
};

export default PlaylistDialog;