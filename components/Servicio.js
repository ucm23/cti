import { Stack } from '@mui/system'
import { GoCloudDownload } from 'react-icons/go'
import { ColorButton } from '../lib/theme'

const Servicio = ({t1, p1, a1, img1, t2, p2, a2, img2}) => {
    return (
        <>
            <section className="servicio">
                <section className="servicio-texto">
                    <h1>{t1}</h1>
                    <p>{p1}</p>
                    <a href={a1} download className="decoration-none">
                        <Stack spacing={3} direction="row" >
                            <ColorButton variant="contained" className='mx-auto' endIcon={<GoCloudDownload className='ml-2' />}>
                                Descargar Folleto</ColorButton>
                        </Stack>
                    </a>
                </section>
                <img src={img1} />
            </section>

            <section className="servicio">
                <img src={img2} />
                <section className="servicio-texto">
                    <h1>{t2}</h1>
                    <p>{p2}</p>
                    <a href={a2} download className="decoration-none">
                        <Stack spacing={3} direction="row" >
                            <ColorButton variant="contained" className='mx-auto' endIcon={<GoCloudDownload className='ml-2' />}>
                                Descargar Folleto</ColorButton>
                        </Stack>
                    </a>
                </section>
            </section>
        </>
    )
}

export default Servicio