import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {MdOutlineSecurity} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Service = ({titulo, descrip}) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 275 }} className='card-margen' >
        <CardContent>
            <MdOutlineSecurity className='icono-servicios' />
            <Typography className='mtb-5' variant="h5" component="div">
                {titulo}
            </Typography>
            <Typography variant="body2">
                {descrip}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" variant='outlined'>Leer Más<AiOutlineArrowRight className='ml-2' /></Button>
        </CardActions>
    </Card>
  )
}

export default Service