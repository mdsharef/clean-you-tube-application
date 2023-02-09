import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/navbar';
// import usePlaylists from '../hooks/usePlaylists';
import ShowPlaylists from '../pages/home';
import NotFound from '../pages/pageNotFound';
import PlayerPage from '../pages/player';

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
                <Route path='/' element={<ShowPlaylists />} />
                <Route path='/player/:playlistID' element={<PlayerPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;