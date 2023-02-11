import { Container, Grid } from "@mui/material";
import PlaylistCard from "../playlist-card";

const ShowPlaylists = ({ playlists, remove=false }) => {
    return (
        <Container maxWidth='lg' sx={{ mb: 14 }}>
            {playlists.length > 0 && (
                <Grid container alignItems='stretch'>
                    {playlists.map(item => (
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
                                remove={remove}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    )
};

export default ShowPlaylists;