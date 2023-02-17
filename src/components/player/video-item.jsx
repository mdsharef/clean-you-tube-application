import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoItem = ({ index, videoItem, channelTitle, handleVideo, isActive=false }) => {
    
    return (
        <Box
            boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
            sx={{
                cursor: 'pointer',
                opacity: isActive ? 0.5 : 1,
                '&:hover': {
                    opacity: 0.5
                }
            }}
            onClick={() => handleVideo(videoItem)}
        >
            <Card 
                sx={{ 
                    width: '100%',
                    display: 'flex',
                }}
            >
                <Typography 
                    variant="h6" 
                    component='div' 
                    alignSelf='center'
                    sx={{fontSize: '16px'}}
                >
                    {index}
                </Typography>
                <CardMedia 
                    component='img'
                    image={videoItem.thumbnail.url ?? ''}
                    sx={{ width: '15px', height: '100%' }}
                />
                <CardContent>
                    <Typography component="div" variant="subtitle2">
                        {videoItem.title}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        component="div"
                        sx={{letterSpacing: 1.3}}
                    >
                        {channelTitle}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
};

export default VideoItem;