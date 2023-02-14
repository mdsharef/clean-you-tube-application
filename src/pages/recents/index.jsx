import { Container, Divider, Typography } from "@mui/material";
import ShowPlaylists from "../../components/shared/ShowPlaylists";
import usePlaylists from "../../hooks/usePlaylists";

const Recents = () => {
    const { recents } = usePlaylists();

    return (
        <Container maxWidth='lg' sx={{my: 12}}>
            <Typography variant='h5'>Recent Playlists</Typography>
            <Divider />
            <ShowPlaylists playlists={recents} />
        </Container>
    )
};

export default Recents;