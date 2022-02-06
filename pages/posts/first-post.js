import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    // replace default HTML Block with Layout:
    <Layout>
      <Head>
        <title>First Post!</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
    </Layout>
  )
}