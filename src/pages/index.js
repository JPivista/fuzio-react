
import { Inter } from 'next/font/google'
import Head from 'next/head'
import FuzhioHome from './fuzhiohome'


const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        Installation
      </Head>
      {/* <div className='min-h-full'></div> */}
      <FuzhioHome />
    </>
  )
}
