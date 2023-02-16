import { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Box, Button, Card, CardContent, Divider, Drawer, Stack, TextField, Typography } from "@mui/material";

const NoteDrawer = ({ open, handleClose, videoId }) => {
    const {createNote} = useStoreActions(actions => actions.notes);
    let {data: notes} = useStoreState(state => state.notes);

    const [state, setState] = useState('');

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
    
        if(!state) return

        const payload = {
            videoId: videoId,
            text: state,
            videoTime: new Date().getMinutes()
        }

        createNote(payload);
        setState('');
    }

    return (
        <Drawer anchor="right" open={open} onClose={handleClose}>
            <Stack width='450px'>
                <Box padding={2}>
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
                                    <Typography component='div' variant='body1' color='secondary' align='right'>
                                       Note taken at - {item.videoTime}  minutes
                                    </Typography>
                                    <Typography component='div' variant='body2' color='text.secondary' sx={{letterSpacing: 1.2}}>
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Box>
            </Stack>
        </Drawer>
    )
};

export default NoteDrawer;