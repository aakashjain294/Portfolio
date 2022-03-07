import Head from 'next/head'
// import Myhome from '../Components/Myhome'
import About from '../Components/About1'
import Home from './Home'
export default function index() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Home />
        {/* <About/> */}
      </div>
    </div>
  )
}
