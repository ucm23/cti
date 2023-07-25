import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import BlogItem from '../components/BlogItem'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const Blog = () => {
    const [Blogdata, setBlogdata] = useState([])

    useEffect(() => {
        (async ()=>{
            const resBlog = await fetch("/data/test.json")
            const Blog = await resBlog.json();
            setBlogdata(Blog.Blogdata)
        })()
    }, [])

    return (
      <Layout>
          <header className='blog-header'>
              {/* Barra de navegación */}
              <Navbar />

              {/* Encabezado */}
              <section className="hero_container container">
                  <Fade direction="right">
                      <h1 className="hero_title">
                          Blog
                      </h1>
                  </Fade>
              </section>
          </header>

          <section className='blog cont'>
            <div className='conteni topMarign'>
              <div className='heading'>
                  <h3>Conoce más sobre tecnología a través de nuestro blog</h3>
              </div>

              <div className='contain grid topMarign'>
                  {
                    Blogdata.map(({id,cover, date, title, desc}, i) => {
                      return (
                          <BlogItem
                            key={i}
                            id={id}
                            cover={cover}
                            date={date}
                            title={title}
                            desc={desc}
                          />
                      )
                    })
                  }
              </div>
            </div>
          </section>
      </Layout>
    )
}

export default Blog