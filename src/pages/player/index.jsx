import { Box, Container } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import VideoList from "../../components/player/video-list";
import VideoPlayer from "../../components/player/video-player";

/**
 * @component PlayerPage
 * @example
 * return ( <PlayerPage playlists={playlists} />)
 */
const PlayerPage = () => {
    const { playlistID } = useParams();
    
    const playlist = useStoreState(state => state.playlists.data[playlistID]);
    const { updateCurrentVideoItem } = useStoreActions(actions => actions.playlists)

    const handleVideo = (item) => {
        updateCurrentVideoItem({playlistID, videoItem: item});
    }

    console.log(playlist);
    if(!playlist) return;

    return (
        <Container 
            maxWidth='lg' 
            sx={{ 
                my: 14,
                display: 'grid',
                gridTemplateColumns: '73% 27%',
                gap: '1rem'
            }}
        >
            <Box>
                <VideoPlayer playlist={playlist}/>
            </Box>
            <Box>
                <VideoList playlist={playlist} handleVideo={handleVideo}/>
            </Box>
        </Container>
    )
};

export default PlayerPage;