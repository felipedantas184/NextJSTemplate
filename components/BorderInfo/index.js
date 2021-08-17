import { BorderInfoContainer, BorderInfoWrapper, BorderInfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './BorderInfoStyles'
import { Button } from '../ButtonElement'
import { Slide } from "react-awesome-reveal";

const BorderInfo = ({id, lightBg, lightText, topLine, headline, description, buttonLabel, imgStart, img, alt, dark, primary, darkText}) => {
  return (
    <>
      <BorderInfoContainer lightBg={lightBg} id={id}>
        <BorderInfoWrapper>
          <BorderInfoRow imgStart={imgStart}>
            <Column1>
              <Slide triggerOnce direction="left" duration={1500} >
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <Button to='signup' smooth={true} duration={500} spy={true} exact='true' offset={80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    >{buttonLabel}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Slide>
            </Column1>
            <Column2>
              <Slide triggerOnce direction="right" duration={1500} >
                <ImgWrap>
                  <Img src={img} alt={alt} width={450} height={450}/>
                </ImgWrap>
              </Slide>
            </Column2>
          </BorderInfoRow>
        </BorderInfoWrapper>
      </BorderInfoContainer>
    </>
  )
}

export default BorderInfo
