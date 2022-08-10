import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Work = ({titulo, src}) => {
  return (
        <Card sx={{ minWidth: 435, maxWidth: 435  }} className='card-margen'>
            <CardMedia
                component="img"
                height="250"
                image={src}
                alt={src} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {titulo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='outlined'>Ver Más</Button>
            </CardActions>
        </Card>
  )
}

export default Work