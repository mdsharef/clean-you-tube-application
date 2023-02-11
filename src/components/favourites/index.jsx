import { Container, Typography } from "@mui/material";
import usePlaylists from "../../hooks/usePlaylists";
import ShowPlaylists from "../shared/ShowPlaylists";

const Favourites = () => {
    const { favourites } = usePlaylists();

    return (
        <Container maxWidth='lg' sx={{my: 16}}>
            <Typography variant='h5'>Favourite Playlists</Typography>
            <hr />
            <ShowPlaylists playlists={favourites} />
        </Container>
    )
};

export default Favourites;