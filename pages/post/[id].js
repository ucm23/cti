import { useRouter } from 'next/router'
import { Fade } from 'react-awesome-reveal';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import { Blogdata } from '../../lib/blog'
import {BsPersonCircle} from 'react-icons/bs'
import {FcCalendar} from 'react-icons/fc'

const post = () => {
    const { query, push } = useRouter();
    const { id } = query;

    const handleNextPost = () =>{
        push(`/post/${(Number(id)+1)}`)
    }

    return (
        <Layout>
          <header className='blog-header'>
              {/* Barra de navegación */}
              <Navbar />

              {/* Encabezado */}
              <section className="hero_container container">
                  <Fade direction="right">
                   {
                        Blogdata.map((blog, i)=>{
                            if(blog.id == id){
                                return (
                                    <h1 key={i} className="titulo-read-blog"> { blog.title }</h1>          
                                )
                            }
                        })
                    }
                    
                  </Fade>
              </section>
          </header>

          <section className='contenedor d-flex'>
            {
                Blogdata.map((blog, i)=>{
                    if(blog.id == id){
                        return (
                            <div key={i} className='read-blog'>
                                <img className='img-detail' src={blog.cover} alt={blog.title} />
                                <div className='d-flex aut-date'>
                                    <div>
                                        <BsPersonCircle /> <span>{ blog.author }</span>
                                    </div>
                                    <div>
                                        <FcCalendar /> <span>{ blog.date }</span>
                                    </div>
                                </div>
                                <p className='read-full'> {blog.read} </p>
                            </div>
                        )
                    }
                })
            }
            <div className='nextPost'>
                <button
                    onClick={handleNextPost}
                >Siguiente</button>
            </div>
          </section>

      </Layout>
    )
}

export default post