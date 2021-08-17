import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesStyles'
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <Slide triggerOnce direction="up" duration={1000}>
          <ServicesCard>
            <ServicesIcon src="/SVGs/svg-1.svg"/>
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>We help your fess and increase your overall revenue.</ServicesP>
          </ServicesCard>
        </Slide>
        <Slide triggerOnce direction="up" duration={1250}>
          <ServicesCard>
          <ServicesIcon src="/SVGs/svg-2.svg"/>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>You can acess our plataform online anywhere in the world.</ServicesP>
          </ServicesCard>
        </Slide>
        <Slide triggerOnce direction="up" duration={1500}>
          <ServicesCard>
            <ServicesIcon src="/SVGs/svg-3.svg"/>
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
          </ServicesCard>
        </Slide>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
