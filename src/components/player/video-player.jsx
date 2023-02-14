import { Button, Card, CardContent, CardMedia, Collapse, Stack, Typography } from "@mui/material";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import YouTube from "react-youtube";
import ExpandMore from "../shared/ExpandMore";
import NoteDialog from "../ui/NoteDialog";

const VideoPlayer = ({ playlist }) => {
    
    const {playlistTitle, channelTitle, currentVideoItem: videoItem} = playlist;

    const [expanded, setExpanded] = useState(false);



    ///** */
    const {createNote} = useStoreActions(actions => actions.notes)
    const [state, setState] = useState({videoId: '', text: '', videoTime: ''});
    const [open, setOpen] = useState(false);

    const handleOpenClick = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (e) => {
        setState((prev) => ({
            ...prev,
             [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e, videoId) => {
        e.preventDefault();
        state.videoId = videoItem.contentDetails.videoId;
        createNote(state);
        handleClose();
    }
    ///** */



    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const opts = {
        height: '520',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }

    return (
        <Card>
            <CardMedia>
                <YouTube 
                    videoId={videoItem.contentDetails.videoId} 
                    opts={opts} 
                    title={videoItem.title}
                />
            </CardMedia>
            <CardContent>
                <Typography component='div' variant="body2" color='primary'>
                    {playlistTitle}
                </Typography>
                <Typography 
                    component='div' 
                    variant='h6'
                    sx={{fontSize: '18px'}}
                >
                    {videoItem.title}
                </Typography>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography 
                        component='div' 
                        variant='body1'
                        color='text.secondary'
                        sx={{fontSize: '16px', letterSpacing: 1.5, cursor: 'pointer'}}
                    >
                        {channelTitle}
                    </Typography>
                    <Button
                        variant="outlined" 
                        onClick={handleOpenClick}
                        sx={{letterSpacing: 1.5, fontSize: '14px'}}
                    >
                        Notes
                    </Button>
                </Stack>
            </CardContent>
            <CardContent>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Typography variant="body2" color='text.primary'>
                        Details of the Video
                    </Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <MdExpandMore />
                    </ExpandMore>
                </Stack>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant='subtitle2' color='text.primary'>
                        {videoItem.title}
                    </Typography>
                    <Typography 
                        variant='body1' 
                        color="text.secondary"
                        sx={{fontSize: '14px', letterSpacing: 1.5, mt: '3px', cursor: 'pointer'}}
                    >
                        {channelTitle}
                    </Typography>
                    <Typography variant='body1' sx={{fontSize: '15px'}}>
                        Published At: {videoItem.contentDetails.videoPublishedAt}
                    </Typography>
                    <Typography variant='body1' sx={{fontSize: '15px'}}>
                        {videoItem.description}
                    </Typography>
                </Collapse>

                {/* notes */}
                <NoteDialog open={open} handleChange={handleChange} handleClose={handleClose} handleSubmit={handleSubmit} />
                {/* notes */}

            </CardContent>
        </Card>
    )
};

export default VideoPlayer;