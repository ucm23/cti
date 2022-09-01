import Head from 'next/head';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from './Footer';

const Layout = ({children}) => {
  
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            console.log(url);
            NProgress.start();
        };

        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', ()=>{
            NProgress.done();
        })

        return () =>{
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, [])

    return (
      <>  
          <Head>
              <title>Grupo CTI</title>
              <link rel="icon" type="image/x-icon" href="/ico.ico"></link>
          </Head>
          <main>
              {children}
          </main>
          <Footer />
      </>
    )
}

export default Layout