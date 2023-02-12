import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import YouTube from "react-youtube";

const VideoPlayer = ({ playlist }) => {
    
    const {playlistTitle, channelTitle, currentVideoItem: videoItem} = playlist;

    const opts = {
        height: '500',
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
                    title={'Demo Player'}
                />
            </CardMedia>
            <CardContent>
                <Typography component='div' variant="body2" color='primary'>
                    {playlistTitle}
                </Typography>
                <Typography 
                    component='div' 
                    variant='h5'
                >
                    {videoItem.title}
                </Typography>
                <Typography 
                    component='div' 
                    variant='body1'
                    color='text.secondary'
                >
                    {channelTitle}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default VideoPlayer;