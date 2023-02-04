import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

/**
 * @component PlayerPage
 * @example
 * return ( <PlayerPage playlists={playlists} />)
 */
const PlayerPage = ({ playlists }) => {
    const {playlistID} = useParams();
    const playlist = playlists[playlistID];
    console.log('current course ->', playlist);

    if(!playlist) return;

    return (
        <Container maxWidth='lg' align='center' sx={{ my: 16 }}>
            <Box>
                <Typography variant='h4'>
                    {playlist.playlistTitle}
                </Typography>
                <Typography variant='body2'>
                    {playlist.playlistDescription}
                </Typography>
            </Box>
        </Container>
    )
};

export default PlayerPage;