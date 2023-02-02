import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/navbar';

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
        <>
            <CssBaseline />
            <div>
                <Navbar />
            </div>
        </>
    )
};

export default App;