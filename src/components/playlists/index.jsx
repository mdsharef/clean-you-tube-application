import { Container, Typography } from "@mui/material";
import usePlaylists from "../../hooks/usePlaylists";
import ShowPlaylists from "../shared/ShowPlaylists";

const Playlists = () => {
    const { playlists } = usePlaylists();

    return (
        <Container maxWidth='lg' sx={{my: 16}}>
            <Typography variant="h5">All Playlists</Typography>
            <hr />
            <ShowPlaylists playlists={playlists} remove={true} />
        </Container>
    )
};

export default Playlists;