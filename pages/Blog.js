import React from 'react'
import { Blogdata } from '../lib/services'

const Blog = () => {
    return (
        <section className='blog cont'>
          <div className='conteni topMarign'>
            <div className='heading'>
              <h3>LATEST BLOG</h3>
              <h1>Read Inspirational Story Every Week</h1>
            </div>

            <div className='contain grid topMarign'>
                {
                  Blogdata.map((val) => {
                    return (
                      <div className='box'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div className='text'>
                          <span>{val.date}</span>
                          <h2>{val.title}</h2>
                          <p>{val.desc}</p>
                          <a href='/'>
                            Leer más...
                          </a>
                        </div>
                      </div>
                    )
                  })
                }
            </div>
          </div>
        </section>
    )
}

export default Blog