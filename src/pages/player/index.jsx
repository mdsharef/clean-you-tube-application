import { Grid } from "@mui/material";
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

    if(!playlist) return;

    return (
        <Grid container sx={{ my: 10}} spacing={1.5}>
            <Grid item sm={12} md={8.5}>
                <VideoPlayer playlist={playlist}/>
            </Grid>
            <Grid item sm={12} md={3.5}>
                <VideoList playlist={playlist} handleVideo={handleVideo}/>
            </Grid>
        </Grid>
    )
};

export default PlayerPage;