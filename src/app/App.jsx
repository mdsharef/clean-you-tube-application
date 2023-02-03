import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/navbar';
import PlaylistCard from '../components/playlist-card';
import usePlaylists from '../hooks/usePlaylists';

/**
 * App Component. This is the root Component of this application.
 * @component
 * @example
 * return (
 *      <App />
 * )
 * @returns <App />
 */
const App = () => {
    const { playlists, addPlaylist, error } = usePlaylists();
    const playlistsArray = Object.values(playlists);

    return (
        <>
            <CssBaseline />
            <Container maxWidth='lg' sx={{ my: 16 }}>
                <Navbar addPlaylist={addPlaylist} />
                {playlistsArray.length > 0 && (
                    <Grid container alignItems='stretch'>
                        {playlistsArray.map(item => (
                            <Grid item xs={12} md={6} lg={4} mb={2}>
                                <PlaylistCard
                                    key={item.playlistID}
                                    playlistThumbnail={item.playlistThumbnail}
                                    channelTitle={item.channelTitle}
                                    playlistTitle={item.playlistTitle}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </>
    )
};

export default App;