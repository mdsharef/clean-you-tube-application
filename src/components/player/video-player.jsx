import { Button, Card, CardActions, CardContent, CardMedia, Collapse, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { MdExpandMore, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import YouTube from "react-youtube";
import ExpandMore from "../shared/ExpandMore";
import NoteDrawer from "./NoteDrawer";

const VideoPlayer = ({ playlist, handleVideo, currentVideo }) => {
    
    const {playlistTitle, channelTitle, currentVideoItem: videoItem, playlistItems} = playlist;

    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpenClick = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

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
                    onReady={onPlayerReady}
                />
            </CardMedia>
            <CardActions disableSpacing>
                <Stack 
                    direction='row' 
                    justifyContent='space-between' 
                    component='div' 
                    sx={{width: '100%'}}
                >
                    <IconButton 
                        color='secondary' 
                        sx={{border: '1px solid #333', marginLeft: '8px'}}
                        disabled={currentVideo <= 0}
                        onClick={() => handleVideo(playlistItems[currentVideo - 1])}
                    >
                        <MdNavigateBefore />
                    </IconButton>
                    <IconButton 
                        color='secondary'
                        sx={{border: '1px solid #333', marginRight: '8px'}}
                        disabled={currentVideo >= playlistItems.length - 1}
                        onClick={() => handleVideo(playlistItems[currentVideo + 1])}
                    >
                        <MdNavigateNext />
                    </IconButton>
                </Stack>
            </CardActions>
            <CardContent sx={{paddingTop: '0px'}}>
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
                <NoteDrawer open={open} handleClose={handleClose} videoId={videoItem.contentDetails.videoId} />
            </CardContent>
        </Card>
    )
};

export default VideoPlayer;