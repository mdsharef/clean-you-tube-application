import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from "@mui/material"
import usePlaylists from "../../hooks/usePlaylists"
import ShowPlaylists from "../shared/ShowPlaylists"

const Recent = () => {
    const { recentsForHome } = usePlaylists();

    return (
        <div>
            <Typography variant='h4'>Recent Played Playlists</Typography>
            <hr />
            <ShowPlaylists playlists={recentsForHome} term={'recents'} />
            <Link component={RouterLink} to={`/recents/lists`} sx={{ textDecoration: 'none' }}>
                <Typography variant='body2' color='text.primary'>
                    Show all playlists
                </Typography>
            </Link>
        </div>
    )
};

export default Recent;