import { BsPersonCircle, BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import { FcCalendar} from 'react-icons/fc'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import moment from 'moment';

const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbXdpcnFlbHF4YXlwbG90ZXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwNTYxMjIsImV4cCI6MjAxMTYzMjEyMn0.Il1rEQXO1tk5XrjjFhCtMFE0nqqJBbfBx_b2KqEaMD0"
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbXdpcnFlbHF4YXlwbG90ZXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwNTYxMjIsImV4cCI6MjAxMTYzMjEyMn0.Il1rEQXO1tk5XrjjFhCtMFE0nqqJBbfBx_b2KqEaMD0"
const url = "https://bsmwirqelqxayplotewx.supabase.co/rest/v1/blogs"

const post = () => {
    const [Blogdata, setBlogdata] = useState([])
    const { query, push } = useRouter();
    const { id } = query;

    useEffect(() => {
        (async ()=>{
            const resBlog = await fetch(url, {
                method: 'GET',
                headers: { 
                    "apikey": apikey,
                    "Authorization": auth
                }
              }
            )
            const Blog = await resBlog.json();
            setBlogdata(Blog)
        })()
    }, [])

    const handleNextPost = () => push(`/post/${(Number(id)==Blogdata.length)?'1':(Number(id)+1)}`) 
    const handleBeforePost = () => push(`/post/${(Number(id)==1)?Blogdata.length:(Number(id)-1)}`)
    
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
                                    <h1 
                                        key={i} 
                                        className="titulo-read-blog"
                                    >                              
                                        { blog.title }          
                                    </h1>          
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
                                    {/* <Image
                                        className='img-detail' 
                                        src={blog.cover} 
                                        alt={blog.title}
                                        width={840}
                                        height={280}
                                    /> */}

                                    <img
                                        className='img-detail'
                                        src={blog.image} 
                                        alt={blog.title}
                                        style={{ width: 840, height: 280 }}
                                    />
                                    <div className='d-flex aut-date'>
                                        <div>
                                            <BsPersonCircle /><span>{blog.author}</span>
                                        </div>
                                        <div>
                                            <FcCalendar /><span>{moment(blog.created_at).format('ll')}</span>
                                        </div>
                                    </div>
                                    <div className='read-full'>{blog.body}</div>
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
            <aside className='titlesPost'>
                <ul className='morePosts'>
                    <h3 className='h3-posts'>También te puede interesar...</h3>
                    {
                        Blogdata.map((blog, i)=>{
                            if(blog.id != id){
                                return (
                                    <li 
                                        key={i}
                                        className='titleItem'
                                        onClick={()=>{
                                            push(`/post/${blog.id}`);
                                        }}
                                    >{ blog.title }</li> 
                                )     
                            }  
                        })
                    }
                </ul>
            </aside>
          </section>

      </Layout>
    )
}

export default post