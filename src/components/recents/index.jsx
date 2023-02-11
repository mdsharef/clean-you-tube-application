import { Container, Typography } from "@mui/material";
import usePlaylists from "../../hooks/usePlaylists";
import ShowPlaylists from "../shared/ShowPlaylists";

const Recents = () => {
    const { recents } = usePlaylists();

    return (
        <Container maxWidth='lg' sx={{my: 16}}>
            <Typography variant='h5'>Recent Playlists</Typography>
            <hr />
            <ShowPlaylists playlists={recents} />
        </Container>
    )
};

export default Recents;