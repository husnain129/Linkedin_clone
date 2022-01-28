import { DesignProvider } from '../context/DesignCTX'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DesignProvider>
      <Component {...pageProps} />
    </DesignProvider>
  )
}

export default MyApp
