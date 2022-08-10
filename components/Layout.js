import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>  
        <Head>
            <title>CTI </title>
        </Head>
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout