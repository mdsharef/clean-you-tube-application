import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useStoreActions } from "easy-peasy";
import checkURL from "../../utils/check-url";

/**
 * PlaylistDialog Component to add new playlist.
 * @component
 * @example 
 * return (
 *  <PlaylistDialog open={open} handleClose={handleClose} getPlaylist={getPlaylist} />
 * )
 * @param {{open: boolean, handleClose: function, getPlaylist: function}} props props passed to the PlaylsitDialog Component.
 * @returns <PlaylistDialog props={"*"} />
 */
const PlaylistDialog = ({ open, handleClose }) => {
    const { playlists: { savePlaylist }, recents: { addRecents } } = useStoreActions(actions => actions);

    const [state, setState] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!state) {
            return alert('Please insert a valid playlist id or url');
        } 
        
        if(checkURL(state)) {
            const url = new URL(state);
            if(!url.hostname.includes('youtube')) {
                return alert('Please insert a valid url!');
            }
            const playlistID = url.searchParams.get('list');
            if(!playlistID) {
                return alert('Please insert a valid playlist url!');
            }
            savePlaylist({playlistID});
            setState('');
            handleClose();
        } else {
            savePlaylist({playlistID: state});
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