import { Container, Grid } from "@mui/material"
import PlaylistCard from "../../components/playlist-card"

/**
 * @component ShowPlaylists
 * @example
 * return (<ShowPlaylists playlistsArray={playlistsArray} />);
 * @param {Array} playlistsArray 
 * @returns (<ShowPlaylists playlistsArray={playlistsArray} />)
 */
const ShowPlaylists = ({ playlistsArray }) => {
    return(
        <Container maxWidth='lg' sx={{ my: 16 }}>
            {playlistsArray.length > 0 && (
                <Grid container alignItems='stretch'>
                    {playlistsArray.map(item => (
                        <Grid 
                            key={item.playlistID}
                            item 
                            xs={12} 
                            md={6} 
                            lg={4} 
                            mb={2}
                        >
                            <PlaylistCard
                                playlistID={item.playlistID}
                                playlistThumbnail={item.playlistThumbnail}
                                channelTitle={item.channelTitle}
                                playlistTitle={item.playlistTitle}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    )
};

export default ShowPlaylists;