import { Grid, useMediaQuery, useTheme } from "@mui/material";
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
    const { updateCurrentVideoItem } = useStoreActions(actions => actions.playlists);

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const handleVideo = (item) => {
        const isExisted = playlist.playlistItems.find(playlist => JSON.stringify(playlist) === JSON.stringify(item));
        
        if(!isExisted) return;

        updateCurrentVideoItem({playlistID, videoItem: item});
    }

    const currentVideo = playlist.playlistItems.findIndex(item => JSON.stringify(item) === JSON.stringify(playlist.currentVideoItem));

    if(!playlist) return;

    return (
        <Grid container sx={{ my: isMatch ? 7.3 : 10}} spacing={1.5}>
            <Grid item sm={12} md={8.5}>
                <VideoPlayer 
                    playlist={playlist}
                    handleVideo={handleVideo}
                    currentVideo={currentVideo}
                    isMatch={isMatch}
                />
            </Grid>
            <Grid item sm={12} md={3.5}>
                <VideoList 
                    playlist={playlist} 
                    handleVideo={handleVideo} 
                    currentVideo={currentVideo} 
                />
            </Grid>
        </Grid>
    )
};

export default PlayerPage;