import { Container, Divider, Typography } from "@mui/material";
import ShowPlaylists from "../../components/shared/ShowPlaylists";
import usePlaylists from "../../hooks/usePlaylists";

const Playlists = () => {
    const { playlists } = usePlaylists();

    return (
        <Container maxWidth='lg' sx={{my: 12}}>
            <Typography variant="h5">All Playlists</Typography>
            <Divider />
            <ShowPlaylists playlists={playlists} remove={true} />
        </Container>
    )
};

export default Playlists;