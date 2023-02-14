import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

const NoteDialog = ({ open, handleClose, handleChange, handleSubmit}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Enter note on this video</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add a new playlist, please insert the playlist id or playlist link here. Please make sure the link is correct. Otherwise, we won't be able to fetch the playlist information.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="text"
                    name="text"
                    label="Notes"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    type="time"
                    autoFocus
                    margin="dense"
                    id="videoTime"
                    name="videoTime"
                    label="Notes"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    )
};

export default NoteDialog;