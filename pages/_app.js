import '../assets/global.css';
import '../assets/normalize.css'

/**
 * This function takes in a Component and pageProps as arguments and returns a Component with
 * pageProps.
 * returns The component that is being rendered.
 */
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
