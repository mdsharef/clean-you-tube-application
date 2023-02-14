import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/navbar';
import NotFound from '../pages/pageNotFound';
import PlayerPage from '../pages/player';
import Home from '../pages/home';
import { Grid } from '@mui/material';
import Footer from '../components/footer';
import Favourites from '../pages/favourites';
import Playlists from '../pages/playlists';
import Recents from '../pages/recents';

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
    return (
        <BrowserRouter>
            <CssBaseline />
            <Grid container direction="column">
                <Grid item>
                    <Navbar />
                </Grid>
                <Grid item container>
                    <Grid item xs={0} sm={1}></Grid>
                    <Grid item xs={12} sm={10}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/player/:playlistID' element={<PlayerPage />} />
                            <Route path='/playlists/lists' element={<Playlists />} />
                            <Route path='/favourites/lists' element={<Favourites />} />
                            <Route path='/recents/lists' element={<Recents />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </Grid>
                    <Grid item xs={0} sm={1}></Grid>
                </Grid>
                <Grid item>
                    <Footer />
                </Grid>
            </Grid>  
        </BrowserRouter>
    );
};

export default App;