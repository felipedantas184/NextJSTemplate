import {ProjectsSectionContainer, ProjectsSectionH1, ProjectsSectionWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img} from './ProjectsSectionStyles'
import { Slide } from "react-awesome-reveal";
import { Button } from '../ButtonElement'

const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer id='ProjectsSection'>
      <ProjectsSectionWrapper>
        <ProjectsSectionH1>Projects</ProjectsSectionH1>
        <Slide triggerOnce direction="up" duration={1000}>
            <InfoRow>
            <Column1>
              <Slide triggerOnce direction="left" duration={1500} >
                <TextWrapper>
                  <TopLine>topLine</TopLine>
                  <Heading>Heading</Heading>
                  <Subtitle>Sed tellus dolor, volutpat nec tortor vitae, vestibulum faucibus nulla. Vestibulum ante ipsum primis in faucibus.</Subtitle>
                  <BtnWrap>
                    <Button to='signup' smooth={true} duration={500} spy={true} exact='true' offset={80}
                    >buttonLabel
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Slide>
            </Column1>
            <Column2>
              <Slide triggerOnce direction="right" duration={1500} >
                <ImgWrap>
                  <Img src="/images/projects/simpfolioImg.jpg" width={640} height={360} />
                </ImgWrap>
              </Slide>
            </Column2>
            </InfoRow>

            <InfoRow className="InfoRow" >
            <Column1>
              <Slide triggerOnce direction="left" duration={1500} >
                <TextWrapper>
                  <TopLine>topLine</TopLine>
                  <Heading>Heading</Heading>
                  <Subtitle>Sed tellus dolor, volutpat nec tortor vitae, vestibulum faucibus nulla. Vestibulum ante ipsum primis in faucibus.</Subtitle>
                  <BtnWrap>
                    <Button to='signup' smooth={true} duration={500} spy={true} exact='true' offset={80}
                    >buttonLabel
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Slide>
            </Column1>
            <Column2>
              <Slide triggerOnce direction="right" duration={1500} >
                <ImgWrap>
                  <Img src="/images/projects/simpfolioImg.jpg" width={640} height={360} />
                </ImgWrap>
              </Slide>
            </Column2>
            </InfoRow>
        </Slide>
      </ProjectsSectionWrapper>
    </ProjectsSectionContainer>
  )
}

export default ProjectsSection
