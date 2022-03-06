import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/home.module.scss'


// import Link from 'next/link'
// import Image from 'next/image'

const ProfileImage = () => {
  <Image
    src="/images/chris-cute-av.svg"
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



// If we wanted to get sever side stuff:
/*export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}*/





// When we set class names on returned elements, we use curly braces instead of quotes.
// We also prefix the class name with the CSS file's name.

export default function Home ({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>Home - {siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd, homeStyles.intro}>
       <small>Designer, Developer, Art Director</small>
      </section>
      <section className={homeStyles.body}>
        <p>Hello! I'm Chris. Thank you for visiting. I'm a front-end visual developer who specializing in UI/UX. I design web and app interfaces and specialize in accessibility. I also code and implement custom WordPress website templates for clients.</p>
        <p>I provide art direction at my current job, ensuring high-quality design experiences reach our clients.</p>
        <p>I graduated with a BFA in Graphic Design from <a href="https://www.design.iastate.edu/graphic-design/" target="_blank">Iowa State University</a> in 2009. Previously I interned at the Iowa Energy Center and worked for QA Graphics in Ankeny, Iowa. I'm a native of the town I'm living in, but I also like to hit the road and get comfortable in airports.</p>
        <p>While studying at Iowa State, I received several awards from the <a href="https://artdirectorsiowa.org/" target="_blank">Art Directors Association of Iowa.</a> I also mentored in the Graphic Design Student Association and studied abroad in Rome, Italy in 2008.</p>
        <p>In my free time, I like to bike, draw, play D&D, and try out new web tools. I'm currently following some YouTube tutorials from <a href="https://www.youtube.com/c/EthanBecker70" target="_blank"> Ethan Becker</a> about becoming a better artist.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
