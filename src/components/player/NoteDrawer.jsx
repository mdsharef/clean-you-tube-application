import { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Box, Button, Card, CardContent, Divider, Drawer, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import useNoteError from "../../hooks/useNoteError";
import ErrorMsg from "../ui/ErrorMsg";

const NoteDrawer = ({ open, handleClose, videoId }) => {
    const {createNote, setError} = useStoreActions(actions => actions.notes);
    let {data: notes} = useStoreState(state => state.notes);

    const { snack, handleSnackClose, handleSnackOpen } = useNoteError();

    const [state, setState] = useState('');

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    notes = Object.keys(notes).reduce((acc, cur) => {
        if(cur.startsWith(videoId)) {
            acc.push(notes[cur]);
        }
        return acc;
    }, [])

    const handleChange = (event) => {
        setState(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if(!state) return setError('Note Feild can not empty!');

        const payload = {
            videoId: videoId,
            text: state,
            videoTime: new Date().toLocaleString(),
        }

        createNote(payload);
        setState('');
        handleSnackOpen({
            open: true,
            message: 'Note created successfully!',
            severity: 'success'
        });
    }

    return (
        <>
            <Drawer 
                anchor="right" 
                open={open} 
                onClose={handleClose} 
            >
                <Box width={isMatch ? '270px' : '450px'}>
                    <Box padding={isMatch ? 0 : 2} pb={2}>
                        <Typography component='div' variant='subtitle1' mb={2}>
                            Take Note
                        </Typography>
                        <TextField 
                            fullWidth
                            multiline
                            maxRows={4}
                            value={state}
                            margin='dense'
                            error={!Boolean(state)}
                            label='Note on the video'
                            onChange={handleChange}
                            helperText={state ? 'Write down note on the video' : 'This field can not ne empty'}
                        />
                        <Typography component='div' align='right'>
                            <Button variant="contained" size="small" color='secondary' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Typography>
                    </Box>
                    <Divider />
                    <Box>
                        {notes && 
                            notes.map(item => (
                                <Card key={item.id}>
                                    <CardContent>
                                        <Typography 
                                            component='div' 
                                            variant='body2' 
                                            color='text.secondary' 
                                            align='right'
                                            fontStyle='italic'
                                            sx={{letterSpacing: 1.2, textDecoration: 'underline'}}
                                        >
                                        Note taken at - {item.videoTime}  minutes
                                        </Typography>
                                        <Typography 
                                            component='div' 
                                            variant='body1' 
                                            color='text.primary' 
                                            sx={{letterSpacing: 1.1, marginTop: '15px'}}
                                        >
                                            {item.text}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </Box>
                </Box>
            </Drawer>
            <ErrorMsg 
                open={snack.open}
                message={snack.message}
                severity={snack.severity}
                handleClose={handleSnackClose}
            />
        </>
    )
};

export default NoteDrawer;