import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/home.module.css'


// import Link from 'next/link'
// import Image from 'next/image'

const ProfileImage = () => {
  <Image
    src="images/chris-cute-av.svg"
    alt="Cartoon Dude head."
    height={200}
    width={200}
  />
}

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}



// When we set class names on returned elements, we use curly braces instead of quotes.
// We also prefix the class name with the CSS file's name.

export default function Home ({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>Home - {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd, homeStyles.intro}>
        <p>Hello! I'm Chris. Thank you for visiting.</p>
        <small>This is a sample website. We'll be building one like this on  <a href="https://nextjs.org/learn">the next Next.js tutorial.</a></small>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
