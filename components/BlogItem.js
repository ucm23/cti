
const BlogItem = ({cover, date, title, desc}) => {
    return (
        <div className='box'>
            <div className='img'>
                <img src={cover} />
            </div>
            <div className='text'>
                <span>{date}</span>
                <h2>{title}</h2>
                <p>{desc}</p>
                <a href='/'>
                    Leer más...
                </a>
            </div>
        </div>
    )
}

export default BlogItem