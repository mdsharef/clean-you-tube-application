import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

/**
 * PlaylistCard Component to show individual playlist
 * @component
 * @example
 * return (
 *  <PlaylistCard playlistThumbnail={playlistThumbnail} channelTitle={channelTitle} playlistTitle={playlistTitle} />
 * )
 * @param {{playlistThumbnail: object, channelTitle: string, playlistTitle: string}} params [options]
 * @returns <PlaylistCard options={params}/>
 */
const PlaylistCard = ({ playlistID, playlistThumbnail, channelTitle, playlistTitle }) => {

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: 1 }}>
      <CardMedia
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h6" color='text.primary'>
          {playlistTitle.length > 50 ? `${playlistTitle.substr(0, 50)}...` : playlistTitle}
        </Typography>
        <Typography variant='body2' color="text.secondary">
            {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <CardActions disableSpacing>
        <Button component={Link} to={`/player/${playlistID}`} >
          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography variant='body2' color={'primary'} fontWeight={600}>
              Start Tutorial
            </Typography>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCard;