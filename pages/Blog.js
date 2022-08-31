import React from 'react'
import { Fade } from 'react-awesome-reveal'
import BlogItem from '../components/BlogItem'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { Blogdata } from '../lib/services'

const Blog = () => {
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
                <h3>BLOG</h3>
                <h1>Read Inspirational Story Every Week</h1>
            </div>

            <div className='contain grid topMarign'>
                {
                  Blogdata.map(({cover, date, title, desc}) => {
                    return (
                        <BlogItem
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

        <Footer />
      </Layout>
    )
}

export default Blog