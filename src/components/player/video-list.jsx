import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useStoreActions } from "easy-peasy";
import { MdRefresh } from 'react-icons/md';
import VideoItem from "./video-item";

const VideoList = ({ playlist, handleVideo, currentVideo }) => {
    const { savePlaylist } = useStoreActions(actions => actions.playlists)

    if(!playlist) return;

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
                    <Button 
                        variant="contained" 
                        size='small' 
                        startIcon={<MdRefresh />}
                        onClick={() => savePlaylist({playlistID: playlist.playlistID, refresh: true})}
                    >
                        Refresh
                    </Button>
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