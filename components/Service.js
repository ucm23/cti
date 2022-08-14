import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import { MdExpandMore } from 'react-icons/md'
import { Stack } from '@mui/material';
import { ColorButton } from '../lib/theme';
import Icon from '@mui/material/Icon'
import { useRouter } from 'next/router'
import { Fade } from "react-awesome-reveal";

const Service = ({titulo, descrip, icono}) => {
    const { push } = useRouter();

    const handleClick = () => {
        push('/Soluciones');    
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: 275 }} className='card-margen'>
            <CardContent>
                <Fade direction="down">
                    <div className='d-flex'>
                        <Icon className='icono-servicios'>{icono}</Icon>
                    </div>
                </Fade>
                <Fade direction="left">
                    <Typography className='mtb-5' variant="h5" component="div">
                        {titulo}
                    </Typography>
                    <Typography variant="body2">
                        {descrip}
                    </Typography>
                </Fade>
            </CardContent>
            <Fade direction="up">
                <CardActions>
                    <Stack spacing={3} direction="row" className='mx-auto mb-4'>
                        <ColorButton onClick={ handleClick } variant="contained" endIcon={<MdExpandMore className='ml-2' />}>Leer Más</ColorButton>
                    </Stack>
                </CardActions>
            </Fade>
        </Card>
    )
}

export default Service