import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import VideoItem from "./video-item";

const VideoList = ({ playlist, handleVideo }) => {
    if(!playlist) return;

    const currentVideo = playlist.playlistItems.findIndex(item => JSON.stringify(item) === JSON.stringify(playlist.currentVideoItem));

    return (
        <Card>
            <CardContent>
                <Stack>
                    <Typography variant='h6' sx={{fontSize: '18px'}}>
                        {playlist.playlistTitle}
                    </Typography>
                    <Typography 
                        variant='body1' 
                        color='text.secondary'
                        sx={{fontSize: '16px', letterSpacing: 1.5, cursor: 'pointer'}}
                    >
                        {playlist.channelTitle} - {currentVideo + 1}/{playlist.playlistItems.length}
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
                            key={`${item.contentDetails.videoId}-${Math.round(Math.random() * index)}`} 
                            index={index + 1}
                            videoItem={item}
                            channelTitle={playlist.channelTitle}
                            handleVideo={handleVideo}
                            isActive={currentVideo === index}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
};

export default VideoList;