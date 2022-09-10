import { Stack } from '@mui/system'
import { Fade } from 'react-awesome-reveal'
import { GoCloudDownload } from 'react-icons/go'
import { ColorButton } from '../lib/theme'
import Image from 'next/image'

const Servicio = ({t1, p1, a1, img1, clase, direction, alt}) => {
    return (
        <Fade direction={direction}>
            <article className={clase}>
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
                <article className='img-sol'>
                    <Image
                        className='img-sol'
                        width={452}
                        height={320}
                        src={img1} 
                        alt={alt}
                        layout="responsive" />
                </article>
            </article>
        </Fade>
    )
}

export default Servicio