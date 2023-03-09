import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import HomePage from './home'
import Layout from '../components/layout/Home-Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <title>NextJS and TailwindCss</title>
        <meta name="description" content="NextJS and TailwindCss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <HomePage />
      </main>
    </Layout>
  )
}
