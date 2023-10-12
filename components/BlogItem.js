import moment from 'moment/moment'
import Image from 'next/image'
import { useRouter } from 'next/router'

const BlogItem = ({id,cover, date, title, desc}) => {

    const { push } = useRouter()
  
    const handleBlog = () => push(`/post/${id}`)

    return (
        <div className='box'
            onClick={handleBlog}
        >
            <div className='img-blog'>
                {/* <Image
                    width={342}
                    height={230}
                    src={cover} 
                    alt={title}
                    layout="responsive" /> */}

                <img
                   src={cover} 
                   alt={title} 
                   style={{ width: 342, height: 230 }}
                />
            </div>
            <div className='textblog'>
                <span>{moment(date).format('ll') }</span>
                <h2>{title}</h2>
                {/* <p>{desc}</p> */}
                <span>Leer más...</span>
            </div>
        </div>
    )
}

export default BlogItem