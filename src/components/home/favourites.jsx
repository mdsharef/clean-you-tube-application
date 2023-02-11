import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from "@mui/material"
import usePlaylists from "../../hooks/usePlaylists"
import ShowPlaylists from "../shared/ShowPlaylists"

const Favourite = () => {
    const { favouritesForHome } = usePlaylists();

    return (
        <div>
            <Typography variant='h4'>Your Favourite Playlists</Typography>
            <hr />
            <ShowPlaylists playlists={favouritesForHome} term={'favourites'} />
            <Link component={RouterLink} to={`/favourites/lists`} sx={{ textDecoration: 'none' }}>
                <Typography variant='body2' color='text.primary'>
                    Show all playlists
                </Typography>
            </Link>
        </div>
    )
};

export default Favourite;