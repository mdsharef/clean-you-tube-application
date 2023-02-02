import { useEffect } from "react";
import usePlaylists from "../hooks/usePlaylists";

/**
 * @component
 * @example
 * return (
 *      <App />
 * )
 * @returns <App />
 */
const App = () => {
    const { getVideosByPlaylistID, playlists } = usePlaylists()
    useEffect(() => {
        getVideosByPlaylistID('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
    }, []);

    console.log(playlists);

    return (
        <div></div>
    )
};

export default App;