import Head from 'next/head'
import BorderInfo from '../components/BorderInfo';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/BorderInfo/Data';
import Testimonials from '../components/Testimonials';
import ProjectsSection from '../components/ProjectsSection';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      <Hero />
      <Carousel />
      <BorderInfo {...homeObjTwo} />
      <ProjectsSection />
      <Services />
      <Testimonials />
    </>
  )
}
