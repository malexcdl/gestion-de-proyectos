import type { AppProps } from 'next/app'
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Estoy en el app")
  return <Component {...pageProps} />
}

export default MyApp

//La linea abajo _app y _documents las lleva para decirle a NextJS que estas no son rutas sino que son archivos de configuración.