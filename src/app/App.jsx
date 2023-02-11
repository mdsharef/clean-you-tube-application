import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/navbar';
import NotFound from '../pages/pageNotFound';
import PlayerPage from '../pages/player';
import Home from '../pages/home';
import Favourites from '../components/favourites';
import Recents from '../components/recents';
import Playlists from '../components/playlists';

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
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/player/:playlistID' element={<PlayerPage />} />
                <Route path='/playlists/lists' element={<Playlists />} />
                <Route path='/favourites/lists' element={<Favourites />} />
                <Route path='/recents/lists' element={<Recents />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;