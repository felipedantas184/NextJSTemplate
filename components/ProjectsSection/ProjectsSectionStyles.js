import styled from 'styled-components'
import Image from 'next/image'

export const ProjectsSectionContainer = styled.div`
  color: #fff;
  background: #f1f2f3;
  border: 1px solid salmon;
 `
export const ProjectsSectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 24px;
  justify-content: center;
`
export const ProjectsSectionH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  grid-template-areas: 'col1 col2';
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'col1' 'col2';
  }
`
export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  padding: 0 15px 0 30px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }

`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 45px;
  }
`
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: #010606;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #13131A;
`
export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 640px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled(Image)`
  width: 100%;
`;


