import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ColorButton } from '../lib/theme';
import { Stack } from '@mui/material';
import { MdExpandMore } from 'react-icons/md';
import { useRouter } from 'next/router'

const Work = ({titulo, src}) => {
    const { push } = useRouter();

    const handleClick = () => {
        push('/Soluciones');    
    }

    return (
            <Card sx={{ minWidth: 435, maxWidth: 435  }} className='card-margen'>
                <CardMedia
                    component="img"
                    height="250"
                    image={src}
                    alt={src} />
                <CardContent className='d-flex'>
                    <Typography gutterBottom variant="h5" component="div" className='m-auto font-work'>
                        {titulo}
                    </Typography>
                </CardContent>
                <CardActions className='pt-0'>
                    <Stack spacing={3} direction="row" className='mx-auto mb-4'>
                        <ColorButton onClick={handleClick} variant="contained" endIcon={<MdExpandMore className='ml-2' />}>Leer Más</ColorButton>
                    </Stack>
                </CardActions>
            </Card>
    )
}

export default Work