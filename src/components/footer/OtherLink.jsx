import { Link as RouterLink } from 'react-router-dom';
import { Stack, Typography, Link } from "@mui/material";
import generateID from "../../utils/generateId";

const getID = generateID('othersLink');

const otherLinks = [
    {
        id: getID.next().value,
        route: '/playlists/lists',
        text: 'Playlists',
        title: 'All Playlists',
        isLastIndex: false,
    },
    {
        id: getID.next().value,
        route: '/favourites/lists',
        text: 'Favourites',
        title: 'Favourites Playlists',
        isLastIndex: false,
    },
    {
        id: getID.next().value,
        route: '/recents/lists',
        text: 'Recents',
        title: 'Recents Playlists',
        isLastIndex: true,
    }
]

const Item = ({ text, route, title, isLastIndex=false }) => {
    return (
        <Link component={RouterLink} to={route} sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='div' color='text.secondary' title={title}>
                {!isLastIndex ? `${text} | ` : text}
            </Typography>
        </Link>
    )
}

const OtherLink = () => {
    return (
        <Stack 
            direction='row' 
            justifyContent='center' 
            alignItems='center'
            mt={2}
            spacing={1}
        >
            {otherLinks.map(item => (
                <Item 
                    key={item.id} 
                    route={item.route} 
                    title={item.title} 
                    text={item.text} 
                    isLastIndex={item.isLastIndex}
                />
            ))}
        </Stack>
    )
};

export default OtherLink;