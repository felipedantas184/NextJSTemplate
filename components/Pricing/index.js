import {PricingContainer, PricingH1, PricingWrapper, PricingCard, PricingH3, PricingSpan, PricingFigure, PricingCurrency, PricingNumber, PricingList, ListItem, BtnWrap, HighlightBlock} from './PricingStyles'
import { Slide } from "react-awesome-reveal";
import { Button } from '../ButtonElement'

const Pricing = (primary, dark) => {
  return (
    <PricingContainer id='Pricing'>
      <PricingH1>Our Pricing</PricingH1>
      <PricingWrapper>
        <Slide triggerOnce direction="up" duration={1000}>
          <PricingCard yellow>
            <PricingH3>FREE<br/><PricingSpan>(Attribution Required)</PricingSpan></PricingH3>
            <PricingFigure>
                <PricingCurrency>$</PricingCurrency><PricingNumber>0</PricingNumber>
            </PricingFigure>
            <PricingList>
                <ListItem>Single installation</ListItem>
                <ListItem>Multiple installations</ListItem>
                <ListItem>Use without attribution link</ListItem>
            </PricingList>
            <BtnWrap>
                <Button to='signup' smooth={true} duration={500} spy={true} exact='true' offset={80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                >Começar Agora
                </Button>
            </BtnWrap>
          </PricingCard>
        
          <PricingCard green highlight >
            <HighlightBlock>POR TEMPO LIMITADO</HighlightBlock>
            <PricingH3>FREE<br/><PricingSpan>(Attribution Required)</PricingSpan></PricingH3>
            <PricingFigure>
                <PricingCurrency>$</PricingCurrency><PricingNumber>0</PricingNumber>
            </PricingFigure>
            <PricingList>
                <ListItem>Single installation</ListItem>
                <ListItem>Multiple installations</ListItem>
                <ListItem>Use without attribution link</ListItem>
            </PricingList>
            <BtnWrap>
                <Button to='signup' smooth={true} duration={500} spy={true} exact='true' offset={80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                >Começar Agora
                </Button>
            </BtnWrap>
          </PricingCard>
        
          <PricingCard blue>
            <PricingH3>FREE<br/><PricingSpan>(Attribution Required)</PricingSpan></PricingH3>
            <PricingFigure>
                <PricingCurrency>$</PricingCurrency><PricingNumber>0</PricingNumber>
            </PricingFigure>
            <PricingList>
                <ListItem>Single installation</ListItem>
                <ListItem>Multiple installations</ListItem>
                <ListItem>Use without attribution link</ListItem>
            </PricingList>
            <BtnWrap>
                <Button to='signup' smooth={true} duration={500} spy={true} exact='true' offset={80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                >Começar Agora
                </Button>
            </BtnWrap>
          </PricingCard>
        </Slide>
      </PricingWrapper>
    </PricingContainer>
  )
}

export default Pricing
