import { BsPersonCircle, BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import { FcCalendar} from 'react-icons/fc'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';

const post = () => {
    const [Blogdata, setBlogdata] = useState([])
    const { query, push } = useRouter();
    const { id } = query;

    /* Fetching the data from the json file. */
    useEffect(() => {
        (async ()=>{
            const resBlog = await fetch("/data/test.json")
            const Blog = await resBlog.json();
            console.log(`Hice el fetch de post/${id}`)
            setBlogdata(Blog.Blogdata)
        })()
    }, [])

    /**
     * If the current post is the last post, then go to the first post. Otherwise, go to the next post.
     */
    const handleNextPost = () =>{
        if(Number(id) == Blogdata.length){
            push(`/post/1`)
        } else {
            push(`/post/${(Number(id)+1)}`)
        }
    }

    /**
     * If the id is 1, then push the user to the last post in the array. If the id is not 1, then push
     * the user to the previous post in the array.
     */
    const handleBeforePost = () =>{
        if(Number(id)==1){
            push(`/post/${Blogdata.length}`)
        } else {
            push(`/post/${(Number(id)-1)}`)
        }
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
            <section className='read-blog-container'>
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
                                    <div className='read-full'> {blog.read.p1}</div>                           
                                    <div className='read-full'> {blog.read.p2}</div>
                                    <div className='read-full'> {blog.read.p3}</div>
                                    <div className='read-full'> {blog.read.p4}</div>
                                    <div className='read-full'> {blog.read.p5} </div>
                                </div>
                            )
                        }
                    })
                }
                <div className='nextPost'>
                    <button
                        className='handleBeforePost'
                        onClick={handleBeforePost}
                    ><BsFillArrowLeftCircleFill className='beforePostIcon' /><span>Blog anterior</span></button>
                    <button
                        className='handleNextPost'
                        onClick={handleNextPost}
                    ><span>Siguiente blog</span><BsFillArrowRightCircleFill className='nextPostIcon' /></button>
                </div>
            </section>
            <div>
                zxczxc
            </div>
          </section>

      </Layout>
    )
}

export default post