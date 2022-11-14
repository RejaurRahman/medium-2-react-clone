import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium 2.0 Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />
    </div>
  )
}

export default Home
