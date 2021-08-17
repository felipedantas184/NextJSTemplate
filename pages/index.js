import Head from 'next/head'
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import { halfObjOne, halfObjTwo, halfObjThree } from '../components/HalfSection/HalfData'
import Pricing from '../components/Pricing';
import Services from '../components/Services';
import Sponsor from '../components/Sponsor';
import Half from '../components/HalfSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      <Hero />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Half {...halfObjTwo} />
      <Services />
      <InfoSection {...homeObjThree}/>
      <Pricing />
      <Sponsor />
    </>
  )
}
