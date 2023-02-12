import { Container } from "@mui/system";
import Favourite from "../../components/home/favourites";
import AllPlaylists from "../../components/home/playlists";
import Recent from "../../components/home/recents";

const Home = () => {
    return(
        <Container maxWidth='lg' sx={{ my: 14 }}>
            <Favourite />
            <Recent />
            <AllPlaylists />
        </Container>
    )
};

export default Home;