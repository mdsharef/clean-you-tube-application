import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from "@mui/material";
import usePlaylists from "../../hooks/usePlaylists";
import ShowPlaylists from "../shared/ShowPlaylists";

const AllPlaylists = () => {
    const { playlistsForHome } = usePlaylists();

    return (
        <div>
            <Typography variant="h4">Your playlists</Typography>
            <hr />
            <ShowPlaylists playlists={playlistsForHome} remove={true} />
            <Link component={RouterLink} to={`/playlists/lists`} sx={{ textDecoration: 'none' }}>
                <Typography variant='body2' color='text.primary'>
                    Show all playlists
                </Typography>
            </Link>
        </div>
    )
};

export default AllPlaylists;