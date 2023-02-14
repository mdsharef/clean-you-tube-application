import { Container, Grid } from "@mui/material";
import PlaylistCard from "../playlist-card";

const ShowPlaylists = ({ playlists, remove=false }) => {
    return (
        <Container maxWidth='lg'>
            {playlists.length > 0 && (
                <Grid container alignItems='stretch' spacing={2}>
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
                                playlist={item}
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