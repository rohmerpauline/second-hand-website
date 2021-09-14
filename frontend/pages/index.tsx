import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keyword' content='web development, programming'/>
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
}

export default Home
