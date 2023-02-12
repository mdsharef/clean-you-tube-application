import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import VideoItem from "./video-item";

const VideoList = ({ playlist, handleVideo }) => {
    if(!playlist) return;

    return (
        <Card>
            <CardContent>
                <Stack>
                    <Typography variant='h6'>{playlist.playlistTitle}</Typography>
                    <Typography variant='body1' color='text.secondary'>
                        {playlist.channelTitle} - current video/{playlist.playlistItems.length}
                    </Typography>
                </Stack>
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: 600,
                        gap: '0.5rem',
                        overflow: 'hidden',
                        overflowY: 'scroll',
                        mt: '5px'
                    }}
                >
                    {playlist.playlistItems.map((item, index) => (
                        <VideoItem 
                            key={item.contentDetails.videoId} 
                            index={index + 1}
                            videoItem={item}
                            channelTitle={playlist.channelTitle}
                            handleVideo={handleVideo}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
};

export default VideoList;