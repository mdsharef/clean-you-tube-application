import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"

const VideoItem = ({ index, videoItem, channelTitle, handleVideo }) => {
    return (
        <Box
            boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
            sx={{
                cursor: 'pointer',
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
                <Typography variant="h6" component='div' alignSelf='center'>
                    {index}
                </Typography>
                <CardMedia 
                    component='img'
                    image={videoItem.thumbnail.url}
                    sx={{ width: '15px', height: '100%' }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            {videoItem.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {channelTitle}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    )
};

export default VideoItem;