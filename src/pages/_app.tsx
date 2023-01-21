import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Router, { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {

  
  useEffect(() => {
    const id = localStorage.getItem("id_token");
    const access = localStorage.getItem("access_token");
    if(id != null && access != null){
      //アクティビティページに飛ばす
      Router.push("/activities");
    }
  },[])



  return <Component {...pageProps} />

}
