import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/**
 * PlaylistCard Component to show individual playlist
 * @example
 * return (
 *  <PlaylistCard playlistThumbnail={playlistThumbnail} channelTitle={channelTitle} playlistTitle={playlistTitle} />
 * )
 * @param {{playlistThumbnail: object, channelTitle: string, playlistTitle: string}} params [options]
 * @returns <PlaylistCard options={params}/>
 */
const PlaylistCard = ({ playlistThumbnail, channelTitle, playlistTitle }) => {

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
        <Button>Play</Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCard;